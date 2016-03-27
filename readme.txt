bigflannel Instafeed

bigflannel Instafeed is a quick and easy way to display your Instagram photos in archive format on your own website. The code is HTML5/PHP/JS.

bigflannel Instafeed Demo
DELETED


Getting Started

1. Visit [DELETED] and click on 'GET YOUR INSTAGRAM ID AND ACCESS TOKEN'. You will be directed to an Instagram login page, after logging in, you will be directed back to bigflannel.com where your 'USERNAME', 'USER ID' and 'ACCESS TOKEN' will be displayed. Copy this information and make a note of it.

2. Open 'conf.php' and add your Instagram user id and access token as the variables $userID and $accessToken.

3. Upload all the files to a folder on your web host and visit that folder in a web browser.


Options

1. You can choose how many Instagram photos bigflannel Instafeed displays by amending 'count' in 'conf.php'.

'count' => '100',
'count' => '20',

2. You can add logo text or a graphic (replacing the 'bigflannel Instafeed' home button) using 'logoType' as follows:

'logoType' => none,
'logoType' => text,
'logoType' => graphic,

then set the logo text using 'logoText':

'logoText' => 'bigflannel Archive',

or set the logo file's address using 'logoFile':

'logoFile' => 'bigflannel-archive/bigflannel-archive-logo.png',

5. You can add an additional link using 'hasLink':

'hasLink' => true,

and the text and address of the link using 'siteLinkText' and 'siteLinkAddress':

'siteLinkText' => 'bigflannel Portfolio',
'siteLinkAddress' => 'http://example.com'


License

(c) 2013 bigflannel
This code is licensed under MIT license (see license.txt for details)


Changelog

1.0
Initial release.
April 2013

