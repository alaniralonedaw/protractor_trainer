describe('Todo form', function()
{
	var textElem = element(by.model("todoList.todoText"));
	var formElem = element(by.tagName("form"));
	var listRepeater = by.repeater('todo in todoList.todos');
	var list = element.all(listRepeater);
	var TestValue = "Testing value";

	beforeEach(function()
	{
		browser.get('http://alanir.talennsy.org/angular/part2.html');
	});
	
	function AddNewElem()
	{
		textElem.sendKeys(TestValue);
		formElem.submit();
	};

	it('Check add', function()
	{
		expect(list.count()).toEqual(2);

		AddNewElem();

		expect(list.count()).toEqual(3);

		expect(list.get(2).element(by.model("todo.done")).isSelected()).toEqual(false);
		expect(list.get(2).element(by.css("span")).getText()).toEqual(TestValue);
	});

	it('Check done', function()
	{
		list.get(1).element(by.model("todo.done")).click();

		expect(list.get(1).element(by.model("todo.done")).isSelected()).toEqual(true);
	});

	it('Check archive', function()
	{
		AddNewElem();

		list.get(2).element(by.model("todo.done")).click();

		element(by.css('[ng-click="todoList.archive()"]')).click();

		expect(list.count()).toEqual(1);
	});
});
