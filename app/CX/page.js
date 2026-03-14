import Script from "next/script";

export default function CX() {

  return (
    <main className="Page">
      <div>
        <h1>Dialogflow CX</h1>
        <hr /><br />
        <p>The chatbot on this page has been implemented using an iframe.</p>
      </div>
      
      <Script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js" strategy="lazyOnload" />
      <df-messenger
        location="europe-west2"
        project-id="sustained-drake-419306"
        agent-id="2f4db549-6b4c-4467-ae52-6d6c733bdedd"
        language-code="en"
        max-query-length="-1">
        <df-messenger-chat-bubble
        chat-title="Shop Assistant">
        </df-messenger-chat-bubble>
      </df-messenger>
    </main>
  );
}
