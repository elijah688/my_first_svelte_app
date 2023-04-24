<script>
    import MeetupItem from "./MeetupItem/MeetupItem.svelte";

    const itemModel = {
        title: "Lorem Ipsum",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ipsum felis. Aliquam erat volutpat. Maecenas sit amet elit bibendum, tristique libero vel, euismod velit. Nunc at faucibus nunc, quis bibendum eros. Vivamus tincidunt mi ut risus pretium, vitae tincidunt nulla sagittis. Sed ut placerat enim. Donec vel turpis quis massa pretium aliquet. Suspendisse non erat in purus semper aliquam. Vestibulum euismod, nulla a lacinia euismod, sem sapi",
        src: "https://imgs.search.brave.com/bK58hbXAE6WdRPAa_DEdOMIcUx3KCCFeRKjkZIdY-WU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuYnVzaW5lc3Np/bnNpZGVyLmNvbS9p/bWFnZS81NDg0ZDlk/MWVhYjhlYTMwMTdi/MTdlMjkvaW1hZ2Uu/anBn",
    };

    const items = [itemModel, itemModel, itemModel];
</script>

{#each items as item}{/each}

<style></style>
