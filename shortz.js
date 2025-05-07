/*
 * Shortz - Simple Keyboard Shortcuts Plugin for Roundcube
 *
 * Shortz is a simple Roundcube plugin that lets you perform  
 * common email actions using keyboard shortcuts. For example,  
 * you can archive a selected message by pressing a key — no  
 * mouse required.
 *
 * @version 1.0.0
 * @license WTFPL
 * @author Jason Horton
 * 
 * DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 * Version 2, December 2004
 *
 * Copyright (C) 2025 Jason Horton
 * 
 * For more information, see the full license text at:
 * http://www.wtfpl.net/txt/copying/
 * 
 */

document.addEventListener("keydown", function (event) {
    const keymap = rcmail.env.shortz_keys || {};
    const key = event.key.toLowerCase();

    if (event.key === '?') {
        event.preventDefault();
        toggle_cheat_sheet();
        return;
    }

    if (keymap[key]) {
        event.preventDefault();
        perform_action(keymap[key]);
    }
});

function perform_action(action) {
    switch (action) {
        case "archive":
            click_button(".archive", "Archive button not found.");
            break;
        case "delete":
            click_button(".delete", "Delete button not found.");
            break;
        case "reply":
            click_button(".reply", "Reply button not found.");
            break;
        default:
            alert("Unknown action: " + action);
    }
}

function click_button(selector, errorMessage) {
    const btn = document.querySelector(selector);
    if (btn) {
        btn.click();
    } else {
        alert(errorMessage);
    }
}

function toggle_cheat_sheet() {
    const existing = document.getElementById("shortz-help");
    if (existing) {
        existing.remove();
        return;
    }

    const keymap = rcmail.env.shortz_keys || {};
    const container = document.createElement("div");
    container.id = "shortz-help";
    container.style.position = "fixed";
    container.style.top = "20px";
    container.style.right = "20px";
    container.style.background = "#fefefe";
    container.style.border = "1px solid #ccc";
    container.style.padding = "12px 18px";
    container.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
    container.style.zIndex = "10000";
    container.style.maxWidth = "300px";
    container.style.fontFamily = "sans-serif";
    container.style.fontSize = "14px";

    const heading = document.createElement("strong");
    heading.textContent = "Keyboard Shortcuts";
    container.appendChild(heading);

    const list = document.createElement("ul");
    list.style.margin = "10px 0";
    list.style.paddingLeft = "20px";

    for (const [key, action] of Object.entries(keymap)) {
        const item = document.createElement("li");
        item.textContent = `"${key.toUpperCase()}" → ${action}`;
        list.appendChild(item);
    }

    const tip = document.createElement("p");
    tip.textContent = 'Press "?" again to close this help.';
    tip.style.fontSize = "12px";
    tip.style.marginTop = "10px";
    tip.style.color = "#555";

    container.appendChild(list);
    container.appendChild(tip);
    document.body.appendChild(container);
}

