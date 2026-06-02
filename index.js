import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Basic Bug</title>
      </Head>

      <main className="container">

        <div className="profile">
          <span>👑 Zal | FOUNDER</span>
        </div>

        <div className="logo">⚡</div>

        <h1>BASIC BUG</h1>
        <p className="subtitle">⚡ Vexel Wraith</p>

        <div className="card">
          <h3>Target Number</h3>
          <input
            type="text"
            placeholder="+62812345678"
          />
        </div>

        <div className="card">
          <h3>Select Bug</h3>
          <select>
            <option>DELAY ANDROID</option>
            <option>DELAY IOS</option>
            <option>FREEZE DEVICE</option>
          </select>
        </div>

        <div className="card">
          <h3>Sender Type</h3>

          <div className="sender">
            <button>🌐 Global</button>
            <button className="active">🛡️ Private</button>
          </div>
        </div>

        <button className="send">
          SEND ATTACK
        </button>

      </main>
    </>
  );
}
