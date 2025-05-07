<?php

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

class shortz extends rcube_plugin
{
    public $task = 'mail'; // Activate plugin only for mail task

    function init()
    {
        $this->load_config(); // Load config.inc.php
        $this->add_hook('startup', [$this, 'on_startup']);
    }

    function on_startup($args)
    {
        $rcmail = rcmail::get_instance();

        if ($rcmail->output->type === 'html') {
            $shortcuts = $rcmail->config->get('shortz_keys', []);
            $rcmail->output->set_env('shortz_keys', $shortcuts);
            $this->include_script('shortz.js');
        }

        return $args;
    }
}

