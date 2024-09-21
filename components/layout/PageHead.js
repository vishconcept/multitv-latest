import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Name - Multitv"}
                </title>
            </Head>
        </>
    )
}

export default PageHead