// save.js

export function saveTaskOnCache(data, index) {
    alert(`index entered as ${index}`);
    console.log(`Starting saveTaskOnCache function with data value as ${data.value}`);
    alert(`Starting saveTaskOnCache function with data value as ${data.value}`);
    index++; let taskNameOnCache = `task-${index}`;
    localStorage.setItem(taskNameOnCache, data.value); // Save task data on Cache
    return index;
}

