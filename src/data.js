const BobTheCleaner = {
  name: 'bob',
  title: 'cleaner of dust',
  inventory: [
    {
      name: 'broom',
      description: 'sweeps things'
    },
    {
      name: 'dustpan',
      description: 'carries dust'
    },
    {
      name: 'duster',
      description: 'moves dust'
    }
  ],
  awesome: true,
  getItemByIndex: index => {
    return BobTheCleaner.inventory[index];
  },
  getItemByName: name => {
    for (let i = 0; i < BobTheCleaner.inventory.length; i++) {
      const inventoryItem = BobTheCleaner.inventory[i];

      if (name === inventoryItem.name) {
        return inventoryItem;
      }
    }
  },
  addItemToInventory: item => {
    BobTheCleaner.inventory.push(item);
  },
  clearInventory: () => {
    BobTheCleaner.inventory = [];
  },
  setTitle: title => {
    BobTheCleaner.title = title;
  }

};

