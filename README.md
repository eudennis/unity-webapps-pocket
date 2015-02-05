Basic Unity WebApps integration with Pocket
===================

<h2>Basic Pocket integration with Ubuntu Unity desktop. It enable a launcher shortcut, alt+tab and shorcut at dashboard for Pocket website (www.getpocket.com).</h2>

<p>For more information about Ubuntu Unity Web apps see this: <a href="http://developer.ubuntu.com/resources/technologies/webapps/" target="_blank">http://developer.ubuntu.com/resources/technologies/webapps/</a></p>

<p>For more information about Pocket, visit <a href="http://getpocket.com" target="_blank" title="Pocket website">getpocket.com</a></p>

<p><strong>Currently not working with Ubuntu 14.04+</strong>. Remember, this only work in Ubuntu with Firefox or Chromium. Webapps doesn't work with Google Chrome or Opera yet.</p>

<p>This is the source code to compile in .deb file and install in Ubuntu</p>

<h4>Changelog:</h4>
<ul>
<li> 0.1 - Basic webapp integration (Dashboard search, launcher icon and alt+tab) </li>
<li> 0.2 - Bug fixes</li>
<li> 0.3 - Fix the HTTPS bug, now it's working again </li>
</ul>

<h4>Installing:</h4>

<ol>
<li>Clone thie repository (or download .zip file);</li>
<li>Open terminal and browse to that folder;</li>
<li>Build the package with dpkg-buildpackage;</li>
<li>Install the .deb file</li>
</ol>

<h4>Step by Step Install:</h4>

<ol>
<li>Open Terminal (Ctrl+Alt+T is the default keyboard hotkey)</li>
<li>Select and go to one directory (cd /home/[user]/)</li>
<li>Download the source from Github (git clone git@github.com:eudennis/unity-webapps-pocket.git)</li>
<li>Open the source folder (cd unity-webapps-pocket)</li>
<li>You need to install some packages to build it (sudo apt-get install build-essential autoconf automake autotools-dev dh-make debhelper devscripts fakeroot xutils lintian pbuilder)</li>
<li>Build it (dpkg-buildpackage -rfakeroot)</li>
<li>Now install the .deb file. Back one directory up and use dpkg -i unity-webapps-getpocket_0.1_all.deb to install it.</li>
<li>Once installed, it's done. You should see an popup notify the first time that you open the Pocket website</li>
</ol>
