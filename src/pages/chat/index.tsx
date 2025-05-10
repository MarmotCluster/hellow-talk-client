import ChatExitIcon from '@/components/common/icons/ChatExitIcon';
import SubmitIcon from '@/components/common/icons/SubmitIcon';
import { useNavigate } from 'react-router';

const Chat = () => {
  /* stores */

  const navigate = useNavigate();

  /* renders */

  return (
    <main
      className="relative fullscreen display-flex fd-column overflow-hidden"
      style={{ height: 'max(100dvh, 280px)' }}
    >
      <section style={{ backgroundColor: '#2552F4', padding: 16 }}>
        <div
          id="profile"
          style={{
            display: 'flex',
            alignItems: 'center',
            rowGap: 12,
            color: 'white',
          }}
        >
          <button
            onClick={() => navigate('/chats')}
            id="go-back"
            style={{
              cursor: 'pointer',
              flexShrink: 0,
              width: 48,
              aspectRatio: `1/1`,
              backgroundColor: 'transparent',
              border: 'none',
            }}
          >
            <ChatExitIcon />
          </button>

          <div
            id="profile-image"
            style={{
              flexShrink: 0,
              width: 48,
              aspectRatio: `1/1`,
              backgroundColor: 'grey',
              borderRadius: 100,
              overflow: 'hidden',
            }}
          ></div>

          <div id="profile-texts" style={{ paddingLeft: 12 }}>
            <p
              id="profile-texts__name"
              style={{
                fontWeight: 'bold',
                fontSize: 18,
              }}
            >
              Beitris Pagaduan
            </p>
            <p
              id="profile-texts__status"
              style={{
                fontWeight: 'lighter',
                fontSize: 12,
              }}
            >
              On-line
            </p>
          </div>
        </div>
      </section>

      {/* ! CORE  */}

      <section
        id="chats"
        style={{
          padding: `1rem`,
          overflow: 'scroll',
          height: 'calc(100% - 80px)',
          paddingBottom: `98px`,
        }}
      >
        {/* chat - member */}

        <div
          className="chat-item"
          data-role="member"
          style={{ display: 'flex', columnGap: 12 }}
        >
          <div
            className="chat-item__profile"
            style={{
              flexShrink: 0,
              height: 48,
              aspectRatio: `1/1`,
              backgroundColor: 'grey',
              borderRadius: 100,
            }}
          ></div>

          <div
            className="chat-item__balloon"
            style={{
              backgroundColor: 'white',
              borderRadius: `0 20px 20px 20px`,

              padding: `.75rem`,
            }}
          >
            <p
              className="chat-item__balloon-text"
              style={{
                fontSize: 12,
              }}
            >
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
              className="chat-item__balloon-timestamp"
              style={{
                textAlign: 'right',
                fontSize: 10,
                color: '#999',
              }}
            >
              18:32
            </p>
          </div>
        </div>

        {/* chat - mine */}

        <div
          className="chat-item"
          data-role="me"
          style={{ display: 'flex', columnGap: 12, paddingTop: '1rem' }}
        >
          <div
            className="chat-item__balloon"
            style={{
              backgroundColor: 'white',
              borderRadius: `20px 0 20px 20px`,

              padding: `.75rem`,
              color: 'white',
              fontWeight: 520,
              background: `linear-gradient(#2552F4, #224ADA)`,
            }}
          >
            <p
              className="chat-item__balloon-text"
              style={{
                fontSize: 12,
              }}
            >
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
              className="chat-item__balloon-timestamp"
              style={{
                textAlign: 'right',
                fontSize: 10,
                fontWeight: 'normal',
              }}
            >
              18:32
            </p>
          </div>
        </div>

        {/* divider */}

        <div
          id="divider"
          style={{
            position: 'relative',
            marginTop: '1rem',
            borderTop: '1px solid #c0c0c0',
          }}
        >
          <p
            className="divider-text"
            style={{
              position: 'absolute',
              left: '50%',
              color: '#c0c0c0',
              fontSize: 10,
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#F1F2F5',
              padding: 8,
            }}
          >
            May. 7
          </p>
        </div>

        {/* R E P E A T */}
        {/* chat - member */}

        <div
          className="chat-item"
          data-role="member"
          style={{ display: 'flex', columnGap: 12, marginTop: `1rem` }}
        >
          <div
            className="chat-item__profile"
            style={{
              flexShrink: 0,
              height: 48,
              aspectRatio: `1/1`,
              backgroundColor: 'grey',
              borderRadius: 100,
            }}
          ></div>

          <div
            className="chat-item__balloon"
            style={{
              backgroundColor: 'white',
              borderRadius: `0 20px 20px 20px`,

              padding: `.75rem`,
            }}
          >
            <p
              className="chat-item__balloon-text"
              style={{
                fontSize: 12,
              }}
            >
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
              className="chat-item__balloon-timestamp"
              style={{
                textAlign: 'right',
                fontSize: 10,
                color: '#999',
              }}
            >
              18:32
            </p>
          </div>
        </div>

        {/* chat - mine */}

        <div
          className="chat-item"
          data-role="me"
          style={{ display: 'flex', columnGap: 12, paddingTop: '1rem' }}
        >
          <div
            className="chat-item__balloon"
            style={{
              backgroundColor: 'white',
              borderRadius: `20px 0 20px 20px`,

              padding: `.75rem`,
              color: 'white',
              fontWeight: 520,
              background: `linear-gradient(#2552F4, #224ADA)`,
            }}
          >
            <p
              className="chat-item__balloon-text"
              style={{
                fontSize: 12,
              }}
            >
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
              className="chat-item__balloon-timestamp"
              style={{
                textAlign: 'right',
                fontSize: 10,
                fontWeight: 'normal',
              }}
            >
              18:32
            </p>
          </div>
        </div>
      </section>

      {/* ! CORE */}

      <section
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          border: `1px solid #f4f4f4`,
          width: '100%',
          padding: '1rem',
          borderRadius: `8px 8px 0 0`,
          boxShadow: `0 -8px 16px 0 rgba(0,0,0,0.08)`,
          display: 'flex',
          columnGap: `1rem`,
        }}
      >
        <textarea
          rows={1}
          style={{
            display: 'block',
            width: '100%',
            backgroundColor: '#f4f4f4',
            borderRadius: 100,
            resize: 'none',
            padding: '1rem',
            border: 'none',
            margin: 0,
          }}
          placeholder="Enter Message ..."
        />

        <button
          style={{
            display: 'block',
            flexShrink: 0,
            height: 48,
            aspectRatio: `1/1`,
            border: 'none',
            backgroundColor: 'transparent',
          }}
        >
          <SubmitIcon />
        </button>
      </section>
    </main>
  );
};

export default Chat;
