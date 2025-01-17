<script>
    import FormGenerator from './FormGenerator.svelte';
    import GeneratedTable from './GeneratedTable.svelte';
    import { onMount } from 'svelte';

    let rows = [];
    let columns = [];

    onMount(() => {
        const savedData = JSON.parse(localStorage.getItem('tableData') || '{}');
        if (savedData.rows && savedData.columns) {
            rows = savedData.rows;
            columns = savedData.columns;
        }
    });

    function handleFormSubmit(event) {
        rows = event.detail.rows;
        columns = event.detail.columns;

        localStorage.setItem('tableData', JSON.stringify({ rows, columns }));
    }
</script>

<main>
    <h1>Dynamic Table Generator</h1>
    <FormGenerator on:submit={handleFormSubmit} />
    {#if rows.length > 0 && columns.length > 0}
        <GeneratedTable {rows} {columns} />
    {/if}
</main>

<style>
    main {
        font-family: Arial, sans-serif;
        max-width: 800px;
        margin: 20px auto;
        padding: 20px;
    }

    h1 {
        text-align: center;
        margin-bottom: 20px;
        color: #333;
    }
</style>
