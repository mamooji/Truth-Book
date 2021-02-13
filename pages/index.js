import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import Card from "../components/Card";
export default function Home() {
  return (
    <Layout>
      {/* <div className="flex flex-col items-center justify-center min-h-screen py-2"> */}
      <div>
        <Head>
          <title>Truths App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* MAIN SECTION OF HOME PAGE */}
        <main className="flex flex-col items-center justify-center px-20 py-4 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to <span className="text-blue-600">Truth Book!</span>
          </h1>

          <p className="mt-3 text-2xl">
            Get started by adding a{" "}
            <Link href="/newTruth">
              <a className="text-blue-600">truth!</a>
            </Link>
          </p>
          <Card />
        </main>
      </div>
    </Layout>
  );
}
