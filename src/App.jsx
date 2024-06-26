import { useState, useEffect } from 'react';
import { MODES } from './constants';
import { RiGithubFill } from 'react-icons/ri';

const checkAI = async () => {
  if ('ai' in window) {
    if ((await window.ai.canCreateTextSession()) === 'readily') {
      return true;
    }
  }
  return false;
};

const Modes = ({ activeMode, setActiveMode, handleInput }) => {
  return (
    <div className="mode">
      {Object.keys(MODES).map((mode) => {
        return (
          <div key={mode} className={`${activeMode !== mode ? '' : 'active'}`} onClick={() => setActiveMode(mode)}>
            <p>{mode}</p>
          </div>
        );
      })}
    </div>
  );
};

const App = () => {
  const [isAI, setIsAI] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [timeTaken, setTimeTaken] = useState(0);
  const [activeMode, setActiveMode] = useState('normal');
  const [model, setModel] = useState({
    prompt: async (inputValue) => {},
  });

  const updateIsAI = async () => {
    const checkAIStatus = await checkAI();

    if (checkAIStatus) {
      const thisModel = await window.ai.createTextSession();
      setModel(thisModel);
    }

    setIsAI(checkAIStatus);
  };

  useEffect(() => {
    updateIsAI();
  }, []);

  const handleInput = async (e) => {
    const prompt = e.target.value;

    if (prompt.trim() === '') {
      setPrompt('');
      return;
    }

    const start = performance.now();
    const aiReplay = await model.prompt(`${MODES[activeMode].prompt} ${prompt}`);
    const end = performance.now();

    setTimeTaken(Math.floor(end - start));
    setPrompt(aiReplay);
  };

  return (
    <main className="main">
      <Modes activeMode={activeMode} setActiveMode={setActiveMode} handleInput={handleInput} />

      <div className="input__box">
        <textarea id="prompt" placeholder={isAI ? 'Enter prompt' : 'no-ai 😜'} disabled={!isAI} onInput={handleInput} />
      </div>

      <div className="time-taken">
        <span>{timeTaken} ms</span>
      </div>

      <div className="gemini__prompt">
        <h1>{prompt}</h1>
        {!isAI && (
          <p>
            Built-in AI doesn't work in your browser. Please check <a href="#">these steps</a> for more datails.
          </p>
        )}
      </div>

      <div className="socials">
        <a href="https://github.com/mur073/chrome-canary-ai" target="_blank">
          <RiGithubFill width={50} height={50} />
        </a>
      </div>
    </main>
  );
};

export default App;
