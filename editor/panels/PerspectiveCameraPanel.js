function PerspectiveCameraPanel(parent)
{
	Panel.call(this, parent);

	//Self pointer
	var self = this;

	//Name
	var text = new Text(this.element);
	text.setAlignment(Text.LEFT);
	text.setText("Name");
	text.position.set(5, 20);
	text.updateInterface();

	this.name = new Textbox(this.element);
	this.name.position.set(45, 10);
	this.name.size.set(200, 18);
	this.name.updateInterface();
	this.name.setOnChange(function()
	{
		if(self.obj !== null)
		{
			self.obj.name = self.name.getText();
			Editor.updateTreeView();
		}
	});

	//Position
	text = new Text(this.element);
	text.setAlignment(Text.LEFT);
	text.setText("Position");
	text.position.set(5, 45);
	text.updateInterface();

	this.pos = new Positionbox(this.element);
	this.pos.position.set(56, 35);
	this.pos.updateInterface();
	this.pos.setOnChange(function()
	{
		if(self.obj !== null)
		{
			var position = self.pos.getValue();
			self.obj.position.set(position.x, position.y, position.z);
		}
	});

	//Rotation
	text = new Text(this.element);
	text.setAlignment(Text.LEFT);
	text.setText("Rotation");
	text.position.set(5, 70);
	text.updateInterface();

	this.rotation = new Positionbox(this.element);
	this.rotation.position.set(57, 60);
	this.rotation.updateInterface();
	this.rotation.setOnChange(function()
	{
		if(self.obj !== null)
		{
			var rotation = self.rotation.getValue();
			self.obj.rotation.set(rotation.x, rotation.y, rotation.z);
		}
	});

	//Fov
	text = new Text(this.element);
	text.setAlignment(Text.LEFT);
	text.setText("FOV");
	text.position.set(5, 95);
	text.updateInterface();

	this.fov = new Slider(this.element);
	this.fov.size.set(150, 18);
	this.fov.position.set(45, 85);
	this.fov.updateInterface();
}

//Functions Prototype
PerspectiveCameraPanel.prototype = Object.create(Panel.prototype);
PerspectiveCameraPanel.prototype.attachObject = attachObject;
PerspectiveCameraPanel.prototype.updatePanel = updatePanel;

//Update panel content from attached object
function updatePanel()
{
	if(this.obj !== null)
	{
		this.name.setText(this.obj.name);

		this.pos.setValue(this.obj.position.x, this.obj.position.y, this.obj.position.z);
		this.rotation.setValue(this.obj.scale.x, this.obj.scale.y, this.obj.scale.z);
	}
}

//Attach object to panel
function attachObject(obj)
{
	this.obj = obj;
	this.updatePanel();
	this.updateInterface();
}
