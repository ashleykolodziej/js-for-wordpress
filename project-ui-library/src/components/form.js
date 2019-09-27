// Helper function for switching the tabs

function submitToConsole( e ) {
	e.preventDefault();

	const currentForm = this.parentElement,
			currentFormFields = Array.from( currentForm.querySelectorAll( `.form-field` ) );

	currentFormFields.map( field => {
		console.log(field);
	} );
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
			<input class="form-input" id="${fieldIdentifier}" type="${fieldObject.type}" value="${fieldIdentifier}" name="${fieldObject.name}" />
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

	let formFields = '';

	data.map( data => {

		if ( "radio" === data.type || "checkbox" === data.type ) {
			formFields += createGroupedField( data );
		} else {
			formFields += createField( data );
		}
	} );

	// Return controls, panels, and wrapper markup
	return `
		<form class="form-container">
			${formFields}
			<input class="form-submit" type="submit" value="Submit" />
		</form>
	`;
}

export function destroyForm( form ) {
	const submit = form.querySelector( `.form-submit` );

	submit.removeEventListener( `click`, submitToConsole );

	form.remove;
}

export function init() {
	const submitButtons = document.querySelectorAll( `.form-submit` );
	const submitButtonsArray = Array.from( submitButtons );

	submitButtonsArray.map( button => {
		button.addEventListener( `click`, submitToConsole );
	});
}