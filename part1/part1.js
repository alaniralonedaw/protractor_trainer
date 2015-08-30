describe('Hello form', function()
{
	var separatorElem = element(by.css('hr'));
	var labelElem = element(by.css('label'));
	var LABEL_DEFAULT_VALUE = "Name:";

	var h1Elem = element(by.binding('yourName'));
	var H1_DEFAULT_VALUE = "Hello !";

	var yourNameElem = element(by.model('yourName'));
	var NAME_DEFAULT_PLACEHOLDER = "Enter a name here";

	beforeEach(function()
	{
		browser.get('http://alanir.talennsy.org/angular/part1.html');
	});

	it('Checking visibility', function()
	{
		expect(separatorElem.isDisplayed()).toBe(true);
		expect(labelElem.isDisplayed()).toBe(true);
		expect(h1Elem.isDisplayed()).toBe(true);
		expect(yourNameElem.isDisplayed()).toBe(true);
	});

	it('Testing captions', function()
	{
		expect(labelElem.getText()).toEqual(LABEL_DEFAULT_VALUE);
		expect(h1Elem.getText()).toEqual(H1_DEFAULT_VALUE);
		expect(yourNameElem.getAttribute('placeholder')).toEqual(NAME_DEFAULT_PLACEHOLDER);
	});

	it('Testing incoming value', function()
	{
		yourNameElem.sendKeys('cooler');

		expect(h1Elem.getText()).toEqual('Hello cooler!');
	});
});
