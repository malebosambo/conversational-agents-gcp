import Script from "next/script";

export default function Home() {
  
  return (
    <main className="Page">
      <div>
        <h1>Dialogflow ES</h1>
        <hr /><br />
        <p>The chatbot on this page has been implemented using an iframe.</p><br />
      </div>

      <Script src="https://console.dialogflow.com/api-client/demo/embedded/0de4163b-eaa6-47fa-a782-c9503d2ee29e" strategy="lazyOnload" />
      <df-messenger
        intent="WELCOME"
        chat-title="XM Bot"
        agent-id="d5462511-31a4-41e7-98fb-325ff0b52954"
        language-code="en"
      ></df-messenger>
    </main>
  );
}
