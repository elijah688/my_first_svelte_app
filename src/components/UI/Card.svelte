<script>
    /**
     * @type {string}
     */
     export let title
     /**
     * @type {string}
     */
    export let subtitle
    /**
     * @type {string}
     */
    export let content
    export let src

</script>

<article>
    <header>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </header>
    <body>
        <img alt="img" />
        <div>
            <p>Content</p>
        </div>
    </body>
</article>

<style>
    article{
        margin: auto;
        border: 1px solid black;
        width: 50vw;
    }
</style>
