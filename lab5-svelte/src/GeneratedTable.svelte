<script>
    export let rows = [];
    export let columns = [];
</script>

<table>
    <thead>
        <tr>
            {#each columns as column}
                <th>{column}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each rows as row}
            <tr>
                {#each columns as _}
                    <td>{row}</td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
    }

    th {
        background-color: #f4f4f4;
    }

    tr:nth-child(even) {
        background-color: #f9f9f9;
    }
</style>
