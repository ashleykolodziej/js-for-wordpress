// Helper function for switching the tabs

function switchTabs() {
	const currentTab = this.dataset.tab,
			tabsContainer = this.parentElement.parentElement,
			currentlyActive = Array.from( tabsContainer.querySelectorAll( `.active` ) );

	currentlyActive.map( active => {
		active.classList.remove( `active` );
	} );

	this.classList.add( `active` );
	tabsContainer.querySelector( `.tab-panel-${currentTab}` ).classList.add( `active` );
}

// Helper function for creating demo data for tabs

export function demoTabs() {
	return [
		{
			tabname: "Demo tab 1",
			tabtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		},
		{
			tabname: "Potoo tab 2",
			tabtext: "Potoo ipsum dolor sit amet, consectetur adipiscing elit."
		},
		{
			tabname: "Puppy tab 3",
			tabtext: "Puppy ipsum dolor sit amet, consectetur adipiscing elit."
		}
	];
}

// Create a set of tabs

export default function createTabs( data ) {
	// The extra joins below are required because templates use toString,
	// which joins using a comma by default. This tells it to join using nothing.
	// See https://stackoverflow.com/questions/45812160/unexpected-comma-using-map/45812277

	// Builds the tab controls
	const tabControls = data.map( ( tab, index ) => {
		const tabname = tab.tabname;
		let activeClass = '';

		if ( 0 === index ) {
			activeClass = 'active';
		}

		return `<button class="tab-control-${index} tab-control ${activeClass}" data-tab="${index}">${tabname}</button>`;
	} ).join( '' );

	// Builds the tab panels
	const tabPanels = data.map( ( tab, index ) => {
		const tabtext = tab.tabtext;
		let activeClass = '';

		if ( 0 === index ) {
			activeClass = 'active';
		}

		return  `<div class="tab-panel-${index} tab-panel ${activeClass}">${tabtext}</div>`;
	} ).join( '' );

	// Return controls, panels, and wrapper markup
	return `
		<section class="tab-container">
			<div class="tab-controls">
				${tabControls}
			</div>
			<div class="tab-panels">
				${tabPanels}
			</div>
		</section>
	`;
}

export function destroyTabs( tabSet ) {
	const tabs = tabSet.querySelectorAll( `.tab-control` );
	const tabsArray = Array.from( tabs );

	tabsArray.map( tab => {
		tab.removeEventListener( `click`, switchTabs() );
	});

	tabSet.remove;
}

export function init() {
	const tabs = document.querySelectorAll( `.tab-control` );
	const tabsArray = Array.from( tabs );

	tabsArray.map( tab => {
		tab.addEventListener( `click`, switchTabs );
	});
}