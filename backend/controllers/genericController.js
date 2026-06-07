export const getItems = (Model) => async (req, res) => {
  try {
    const items = await Model.find().sort({ order: 1, createdAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createItem = (Model) => async (req, res) => {
  try {
    const item = new Model(req.body);
    const createdItem = await item.save();
    res.status(201).json(createdItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateItem = (Model) => async (req, res) => {
  try {
    const item = await Model.findById(req.params.id);
    if (item) {
      Object.assign(item, req.body);
      const updatedItem = await item.save();
      res.json(updatedItem);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteItem = (Model) => async (req, res) => {
  try {
    const item = await Model.findById(req.params.id);
    if (item) {
      await Model.deleteOne({ _id: item._id });
      res.json({ message: 'Item removed' });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
