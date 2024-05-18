# GPT arena ⚡️
Get answers from different GPT models. 
#Modifications
-Developed it for multi model comparison(basically free Open source LLms)
-Also added voice to text typing , jus using WebSpeech API

In the web application you can compare models: `gpt-3.5-turbo` and `gpt-4-1106-preview`.

<img width="512" alt="image" src="https://github.com/klnamv/gpt_arena/assets/117654777/dc804819-8951-4652-9901-2004cc8d58a7">

# Technologies 💻
- `React`
- `React Markdown`
- `OpenAI API`
- `SASS`

# How It Works?
Users input data that is asynchronously sent to the selected GPT model via the OpenAI API, using a streaming to output the generated text - the model's response, and ReactMarkdown to display the output, providing a full-fledged representation of the message.

# OpenAI API Key 🔐
To interact with the GPT models, an API key from OpenAI is required. This key enables your application to authenticate requests to OpenAI's services, ensuring that usage is secure and measured.

**Acquiring an API Key**
1. Create an account at OpenAI.
2. Navigate to the API section and generate a new API key.
3. Once you have your key, you will use it in your environment file to authenticate API requests from your application.

**Setting Up Your API Key**

In the root of your project:
1. Create a `.env` file.
2. Add the following line: `REACT_APP_OPENAI_API_KEY='your-api-key-here'`.
3. This will allow your application to authenticate its requests to OpenAI.

# How Can It Be Improved?
- Add a personal account (username, password, API key);
- Save user info, sessions in DataBase (MongoDB or Postgres);
- Add the ability to select models for comparison (drop-down list);
- Adapt the web application for mobile devices;

# Known Problems 🐛
- The web application is not adapted for phones and tablets.

# Running the Project 🚦
To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine.
2. Run <code>npm install</code> or <code>yarn</code> in the project directory to install the required dependencies.
3. Create `.env` file, inside write <code>REACT_APP_OPENAI_API_KEY='your-api-key-here'</code>
4. Run <code>npm run start</code> or <code>yarn start</code> to get the project started.
5. Open http://localhost:3000 (or the address shown in your console) in your web browser to view the app.

# Demo 📸
[demo](https://github.com/klnamv/gpt_arena/assets/117654777/25b08343-e89a-465a-b41f-39b772798133)



