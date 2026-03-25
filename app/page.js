import Script from "next/script";

export default function Home() {
  
  return (
    <main className="Page">
      <div>
        <h1>Dialogflow ES</h1>
        <hr /><br />
        <p>The chatbot on this page has been implemented using an iframe.</p><br />
      </div>

      <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1" strategy="lazyOnload" />
      <df-messenger
        intent="WELCOME"
        chat-title="XM FAQ Bot"
        agent-id="0de4163b-eaa6-47fa-a782-c9503d2ee29e"
        language-code="en"
      ></df-messenger>
    </main>
  );
}
