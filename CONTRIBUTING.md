# Contributing

Hey there! Thanks for thinking about helping us bring new features for Athena, The Modern Polymath's Discord bot, to life. She will have more awesome features because you are helping contribute.
If you want more information, check out our [README file](README.md).

## Table of Contents

- [Reporting Issues](#report)
- [Feature Suggestion](#feats)
- [Getting Started With Development](#development)
  - [Setting Up Your Environment](#setup)
  - [Questions, Comments, Concerns](#questions)
- [Pull Request Guidelines](#pullreqguide)
- [Frequently Asked Questions](#faq)

## Reporting Issues<a name = "report"></a>

Did you find a bug using Athena? Is something not working as intended? Head on over to our [Issue Tracker](https://github.com/The-Modern-Polymath/athena/issues) and see if it's been reported. If it has, add some details about your experience with the issue, and if it hasn't, go ahead and open a new issue. The more information about your issue, the more we can work with, so don't be afraid to get _detailed!_

If you're the kind of person who wants to tackle the issue, check out [Getting Started With Development](#development). We'd love for you to contribute.

## Feature Suggestion<a name = "feats"></a>

To suggest features, you can head on over to the [Issue Tracker](https://github.com/The-Modern-Polymath/athena/issues) and see if someone has requested a similar feature. If they haven't, go ahead and open up an issue and explain what kind of new upgrade you'd like Athena to have.

### Want to contribute the feature yourself?

- **If your feature is a big one,** you can create an issue explaining your idea so that we can see to bring it to life or even get you on the team.
- **If your feature is small,** you can open up a [Pull Request](https://github.com/The-Modern-Polymath/athena/pulls)

## Getting Started With Development<a name = "development"></a>

### Setting Up Your Environment<a name = "setup"></a>

Some setup is required in order to start contributing to Athena. Start by copying the `.env.example` file into a new file named `.env`.

#### Node JS

Athena is based on [NodeJS](https://nodejs.org/en/), which is required to run it. If you haven't already, you'll need to go ahead and download it. Athena is running on Node.js 16.9 and up.

#### Installing Dependencies

Now that you have Node installed, you can go ahead and install the required dependencies by running `npm ci` in the root directory _after installing NodeJS_. This may take a while. Have a coffee while you wait! []\~(￣▽￣)\~*

#### Discord API Usage<a name = "discord-api"></a>

If you haven't already noticed, Athena is a Discord bot. If you haven't already, go ahead and visit the [Discord Developers Section](https://discordapp.com/developers) in order to create an application for developing bots. Once you've made an application, open it and go to the 'Bot' section. You will find a token, which will allow you to run your bot. Put this token into the `.env` file. As mentioned above, you should have this file after copying `.env.example` and renaming it to `.env`.
This step is needed to connect the bot authentication to your instance of the bot.

_Friendly reminder to keep your bot token secret to you. The repo is set up such that you should never need to commit your token._

To test Athena, you'll need to invite the bot to your development server. Copy and paste the following link, replacing **XXXX** with the **client_id** of your bot. The client ID can be found on the [Developers Section](https://discordapp.com/developers). `https://discordapp.com/oauth2/authorize?client_id=XXXX&scope=bot`

#### Ready to test your modifications to Athena?

In your root directory, go ahead and run ```npm start```, and you're ready to go. When the bot is ready, it will tell you by displaying a message in the terminal and your bot will be online in your test server.

#### We have a linter set up

We use [eslint](https://eslint.org/) for code checkups. To run the linter, go ahead and run ```npm run lint```.

#### Running tests

Use ```npm test``` to run unit tests. The tests are good for catching when you've accidentally broken a working feature. However, the tests are not comprehensive, and do not always catch everything - please test on your local server as well.

### Questions, Comments, Concerns <a name = "questions"></a>

- **General questions about MP or Athena?** Head on over to the [The Modern Polymath Discord Server](https://discord.gg/U3UQRnJDGt) for any sort of discussion. If you're looking to discuss development or features, we'd recommend the #code-club  channel.
- **Development questions** or code problems? Search up your question on Stack Overflow or find general forums if your questions are related specifically to code, but no harm in asking other MP members for discussions, or pinging someone from the MP engineering team.
- **Check out the FAQ** [below!](#faq)

## Pull Request Guidelines <a name = "pullreqguide"></a>

_Please adhere to the following guidelines._ We want to avoid duplicate issues, reports, features, etc.

1. Search the [Issue Tracker](https://github.com/The-Modern-Polymath/athena/issues) for any relevant threads to what you're looking to create a PR for.
2. Keep it detailed. We want to know your vision, and the more you give us the better discussion we can have!
3. Please make sure you have read the [license agreement](LICENSE.md). We're using the [MIT License](https://opensource.org/licenses/MIT)- it's only 3 paragraphs!
4. Fork the main repo and make a new branch for your changes  
5. Make sure to test your bot on a local/personal testing Discord server
6. Make sure your branch is updated with the master branch before sending your pull request, in case other changes have been made
7. Make sure that your new feature is properly tested, and that it can pass all tests before submitting the pull request.
8. Send your pull request to the [main branch](https://github.com/The-Modern-Polymath/athena/tree/main)

## Frequently Asked Questions <a name = "faq"></a>

Nothing added here yet. ¯\\\_(ツ)\_/¯
