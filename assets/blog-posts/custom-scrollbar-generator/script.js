let scrollBar = {};

scrollBar.thumbColor = document.querySelector('#scrollbar-thumb-color');
scrollBar.trackColor = document.querySelector('#scrollbar-track-color');
scrollBar.widthStyle = document.querySelector('#scrollbar-width-style');
scrollBar.width = document.querySelector('#scrollbar-width');
scrollBar.height = document.querySelector('#scrollbar-height');
scrollBar.thumbBorderWidth = document.querySelector('#thumb-border-width');
scrollBar.thumbBorderRadius = document.querySelector('#thumb-border-radius');
scrollBar.thumbBorderStyle = document.querySelector('#thumb-border-style');
scrollBar.thumbBorderColor = document.querySelector('#thumb-border-color');
scrollBar.thumbShadow = document.querySelector('#thumb-shadow');
scrollBar.thumbShadowInset = document.querySelector('#thumb-shadow-inset');
scrollBar.thumbShadowH = document.querySelector('#thumb-shadow-h');
scrollBar.thumbShadowV = document.querySelector('#thumb-shadow-v');
scrollBar.thumbShadowBlur = document.querySelector('#thumb-shadow-blur');
scrollBar.thumbShadowSpread = document.querySelector('#thumb-shadow-spread');
scrollBar.thumbShadowColor = document.querySelector('#thumb-shadow-color');


let viewBox = document.querySelector('#view-box');

let codeOutput = document.querySelector('#code-output');

let codeCopy = document.querySelector('#code-copy');

const viewBoxStyles = document.querySelector('#view-box-styles');

let output = '';

let addText = (lineBreaks, string) => {
	output += '\n'.repeat(lineBreaks) + string;
};

let buildScrollBar = (selector) => {

	if (!selector) {
		selector = '*';
	}

	output = '';

	addText(0, '/* ===== Custom Scrollbar ===== */');

	addText(2, '/* Firefox */');

	addText(2, selector + ' {');
	addText(1, '	scrollbar-width: ' + scrollBar.widthStyle.value + ';');
	addText(1, '	scrollbar-color: ' + scrollBar.thumbColor.value + ' ' + scrollBar.trackColor.value + ';');
	addText(1, '}');

	addText(2, '/* Chrome, Safari, Edge */');

	addText(2, selector + '::-webkit-scrollbar {');
	addText(1, '	width: ' + scrollBar.width.value + 'px;');
	addText(1, '	height: ' + scrollBar.height.value + 'px;');
	addText(1, '}');

	addText(2, selector + '::-webkit-scrollbar-thumb {');
	addText(1, '	background: ' + scrollBar.thumbColor.value + ';');
	addText(1, '	border-radius: ' + scrollBar.thumbBorderRadius.value + 'px;');
	addText(1, '	border: ' + scrollBar.thumbBorderWidth.value + 'px ' + scrollBar.thumbBorderStyle.value + ' ' + scrollBar.thumbBorderColor.value + ';');
	let thumbShadowValue = '';
	if (scrollBar.thumbShadow.value == 'show') {
		if (scrollBar.thumbShadowInset.value == 'true') {
			thumbShadowValue = 'inset ';
		}
		thumbShadowValue += scrollBar.thumbShadowH.value + 'px ';
		thumbShadowValue += scrollBar.thumbShadowV.value + 'px ';
		thumbShadowValue += scrollBar.thumbShadowBlur.value + 'px ';
		thumbShadowValue += scrollBar.thumbShadowSpread.value + 'px ';
		thumbShadowValue += scrollBar.thumbShadowColor.value;
		addText(1, '	box-shadow: ' + thumbShadowValue + ';');
	}
	addText(1, '}');

	addText(2, selector + '::-webkit-scrollbar-track {');
	addText(1, '	background: ' + scrollBar.trackColor.value + ';');
	
	addText(1, '}');

	return output;
};
viewBoxStyles.innerHTML = buildScrollBar('#view-box');
codeOutput.innerHTML = buildScrollBar();
console.log(buildScrollBar());

document.querySelector('#control-center').addEventListener('change', () => {
	viewBoxStyles.innerHTML = buildScrollBar('#view-box');
	codeOutput.innerHTML = buildScrollBar();
	console.log(buildScrollBar());
});


codeOutput.addEventListener('click', () => {
	codeOutput.select();
});

childDisablers = document.querySelectorAll('.child-disabler');

// if childDisabler value is none, disable all children
childDisablers.forEach(childDisabler => {
	childDisabler.addEventListener('change', () => {
		if (childDisabler.value == 'none') {
			childDisabler.parentNode.querySelectorAll('input, select:not(.child-disabler)').forEach(input => {
				input.disabled = true;
			});
		} else {
			childDisabler.parentNode.querySelectorAll('input, select:not(.child-disabler)').forEach(input => {
				input.disabled = false;
			});
		}
	});
});