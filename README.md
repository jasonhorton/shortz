# Shortz – Keyboard Shortcuts Plugin for Roundcube

**Shortz** is a simple Roundcube plugin that lets you perform common email actions using keyboard shortcuts. For example, you can archive a selected message by pressing a key — no mouse required.

There are a bunch of keyboard shortcut plugins for Roundcube, but they are either for old versions and no longer work, or work but not fully, or are unusually complicated. I was after being able to Archive messages, which was not available in most, so here we are!

## Features

- Archive selected message with `A`
- Reply to selected message with `R`
- Delete selected message with `D`
- Lightweight and minimal configuration

## Installation

1. Clone or download this repository:

   git clone https://github.com/your-username/shortz.git

2. Copy the `shortz` folder into your Roundcube `plugins` directory:

   /path/to/roundcube/plugins/shortz/

3. Enable the plugin by adding it to the plugins array in `config/config.inc.php`:

   $config['plugins'] = ['shortz'];

4. (Optional) Customize the plugin if needed by editing `shortz.js` or modifying the plugin PHP logic.

## Usage

Once installed and enabled, you can use the following keyboard shortcuts while in the message list:

- Press `A` to archive the selected message
- Press `R` to reply
- Press `D` to delete

These keys simulate clicks on the corresponding buttons in the UI, so they behave the same as mouse interactions.

## Compatibility

Tested with:
- Roundcube 1.6.x
- Modern desktop browsers

## License

This plugin is licensed under the **WTFPL** (Do What The F*ck You Want To Public License).

You can do anything with it: copy, modify, distribute, or sell it.

For more information, see [WTFPL License](http://www.wtfpl.net/txt/copying/).

