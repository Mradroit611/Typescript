// Define type aliases for data operations
type DataItem = {
    id: number;
    name: string;
    description?: string;
};

type DataService = {
    create: (item: DataItem) => void;
    read: (id: number) => DataItem | undefined;
    update: (id: number, item: DataItem) => void;
    delete: (id: number) => void;
};

// Example implementation of DataService
const dataService: DataService = {
    create: (item) => {
        console.log(`Created item: ${item.name}`);
        // Logic to save item to database
    },
    read: (id) => {
        // Logic to fetch item from database
        return { id, name: "Example Item" }; // Example implementation, replace with actual logic
    },
    update: (id, item) => {
        console.log(`Updated item ${id}: ${item.name}`);
        // Logic to update item in database
    },
    delete: (id) => {
        console.log(`Deleted item ${id}`);
        // Logic to delete item from database
    },
};

// Example usage
const newItem: DataItem = { id: 1, name: "New Item", description: "Example description" };
dataService.create(newItem);

const retrievedItem = dataService.read(1);
if (retrievedItem) {
    console.log(`Retrieved item: ${retrievedItem.name}`);
}

dataService.update(1, { id: 1, name: "Updated Item", description: "Updated description" });
dataService.delete(1);
