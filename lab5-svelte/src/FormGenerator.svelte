<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let numRows = 5;
    let numColumns = 3;

    let data = {
        rows: [],
        columns: [],
    };

    function generateTable() {
        data.rows = Array.from({ length: numRows }, (_, i) => `Row ${i + 1}`);
        data.columns = Array.from({ length: numColumns }, (_, i) => `Column ${i + 1}`);

        localStorage.setItem('tableData', JSON.stringify(data));

        dispatch('submit', data);
    }

</script>

<form on:submit|preventDefault="{generateTable}">
    <div>
        <label for="rows">Number of Rows:</label>
        <input id="rows" type="number" bind:value="{numRows}" min="1" />
    </div>
    <div>
        <label for="columns">Number of Columns:</label>
        <input id="columns" type="number" bind:value="{numColumns}" min="1" />
    </div>
    <button type="submit">Generate Table</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
    }

    label {
        font-weight: bold;
    }

    input {
        padding: 5px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    button {
        padding: 10px 15px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>
