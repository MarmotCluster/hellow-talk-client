import ChatExitIcon from '@/components/common/icons/ChatExitIcon';
import SubmitIcon from '@/components/common/icons/SubmitIcon';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

const Chat = () => {
  /* stores */

  const navigate = useNavigate();

  /* refs */

  const chatRef = useRef<HTMLDivElement>(null);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  /* states */

  const [text, setText] = useState('');

  /* functions */

  const handleTextChange = (e: React.ChangeEvent) => {
    setText((e.target as HTMLTextAreaElement).value);
  };

  const handleInput = (e: React.FormEvent) => {
    if (!textareaRef.current) return;

    const offset =
      ((e.target as HTMLTextAreaElement).value.match(/\n/g)?.length ?? 0) * 14;

    textareaRef.current.style.height = (14 + offset).toString() + 'px';
  };

  const handleSubmit = () => {
    if (!text.length) return;
    setText('');
    textareaRef.current!.style.height = 'unset';
  };

  /* effects */

  useEffect(() => {
    if (!chatRef.current) return;

    chatRef.current.scrollTop = 1000000;
  }, []);

  /* renders */

  return (
    <main className="relative fullscreen display-flex fd-column overflow-hidden chat">
      <section className="chat-topbar display-flex align-center">
        <div className="chat-topbar-content">
          <button
            className="chat-topbar__goback active-button"
            onClick={() => navigate('/chats')}
          >
            <ChatExitIcon />
          </button>

          <div className="chat-topbar__profile flexy"></div>

          <div className="chat-topbar__profile-texts">
            <p className="chat-topbar__profile-texts__name">Beitris Pagaduan</p>
            <p className="chat-topbar__profile-texts__status">On-line</p>
          </div>
        </div>
      </section>

      {/* ! CORE  */}

      <section ref={chatRef} className="chat-content">
        {/* chat - member */}

        <div className="chat-content-item" data-role="member">
          <div className="chat-content-item__profile"></div>

          <div className="chat-content-item__balloon">
            <p className="chat-content-item__balloon-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p
              className="chat-content-item__balloon-timestamp"
              data-role="dark"
            >
              18:32
            </p>
          </div>
        </div>

        {/* chat - mine */}

        <div className="chat-content-item" data-role="me">
          <div className="chat-content-item__balloon">
            <p className="chat-content-item__balloon-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="chat-content-item__balloon-timestamp">18:32</p>
          </div>
        </div>

        {/* divider */}

        <div className="chat-content-item__divider">
          <p className="chat-content-item__divider-text">May. 7</p>
        </div>

        {/* R E P E A T */}
        {/* chat - member */}

        <div className="chat-content-item" data-role="member">
          <div className="chat-content-item__profile"></div>

          <div className="chat-content-item__balloon">
            <p className="chat-content-item__balloon-text">sry for delay.</p>
            <p
              className="chat-content-item__balloon-timestamp"
              data-role="dark"
            >
              18:32
            </p>
          </div>
        </div>

        {/* divider */}

        <div className="chat-content-item__divider">
          <p className="chat-content-item__divider-text">May. 8</p>
        </div>

        {/* chat - mine */}

        <div className="chat-content-item" data-role="me">
          <div className="chat-content-item__balloon">
            <p className="chat-content-item__balloon-text">never mind</p>
            <p className="chat-content-item__balloon-timestamp">18:32</p>
          </div>
        </div>
      </section>

      {/* ! CORE */}

      <section className="chat-textfield">
        <div className="chat-textfield__textfield">
          <textarea
            ref={textareaRef}
            onInput={handleInput}
            rows={1}
            placeholder="Enter Message ..."
            value={text}
            onChange={handleTextChange}
          />
        </div>

        <button className="chat-textfield__submit" onClick={handleSubmit}>
          <SubmitIcon />
        </button>
      </section>
    </main>
  );
};

export default Chat;
