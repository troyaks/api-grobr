// save.js

export function saveTaskOnCache(data, index) {
    console.log(`Starting saveTaskOnCache function with data value as ${data.value}`);
    index++; taskNameOnCache = `task-${index}`;
    localStorage.setItem(taskNameOnCache, data.value); // Save task data on Cache
    return index;
}

