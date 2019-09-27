// Helper function for switching the tabs

function formAction() {

}

// Helper function for creating demo data for tabs

export function demoForm() {
	return [
		{
			label: "Demo Text",
			name: "name",
			type: "input"
		},
		{
			label: "Demo Radio",
			name: "favorite-food",
			type: "radio",
			options: [
				"Hay",
				"Carrot",
				"Cake"
			]
		},
		{
			label: "Demo Checkbox",
			name: "favorite-animal",
			type: "checkbox",
			options: [
				"Bunny",
				"Kitty",
				"Puppy"
			]
		}
	];
}

// Create single field

function createField( fieldObject ) {
	let fieldIdentifier = fieldObject.name;

	if ( fieldObject.id ) {
		fieldIdentifier = fieldObject.id;
	}

	return `
		<label class="form-field form-field-type-${fieldObject.type}">
			<span class="form-label">${fieldObject.label}</span>
			<input id="${fieldIdentifier}" type="${fieldObject.type}" value="${fieldIdentifier}" name="${fieldObject.name}" />
		</label>
	`;
}

// Create grouped field

function createGroupedField( fieldObject ) {
	let groupedFields = '';

	fieldObject.options.map( option => {

		const optionObject = {
			label: option,
			name: fieldObject.name,
			id: option,
			type: fieldObject.type
		}

		groupedFields += createField( optionObject );
	} );

	return `
		<fieldset class="form-fieldset form-field-type-${fieldObject.type}">
			<legend class="form-legend">${fieldObject.label}</legend>
			${groupedFields}
		</fieldset>
	`;
}

// Create fields

// Create a form

export default function createForm( data ) {
	// The extra joins below are required because templates use toString,
	// which joins using a comma by default. This tells it to join using nothing.
	// See https://stackoverflow.com/questions/45812160/unexpected-comma-using-map/45812277

	let tabFields = '';

	data.map( data => {

		if ( "radio" === data.type || "checkbox" === data.type ) {
			tabFields += createGroupedField( data );
		} else {
			tabFields += createField( data );
		}
	} );

	// Return controls, panels, and wrapper markup
	return `
		<form class="form-container">
			${tabFields}
		</form>
	`;
}

/*export function destroyForm( form ) {
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
}*/