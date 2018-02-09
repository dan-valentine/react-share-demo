## Intro to react-share

react-share is a wonderful library that makes it easy to create share buttons for react. It makes an easy to use react component to share media with people on a lot of different socail media platforms. <a href='https://github.com/nygardk/react-share' >Click here to see the docs.</a>

## What does it have share buttons for?

    Facebook
    Twitter
    Telegram
    Google+
    Whatsapp
    LinkedIn
    Pinterest
    VK
    Odnoklassniki
    Reddit
    Tumblr
    Mail.Ru
    LiveJournal
    email

## What does it have share counts for?

    Facebook
    Google+
    Linkedin
    Pinterest
    VK
    Odnoklassniki
    Reddit
    Tumblr

## How Hard is it to use?
1/10

## Can you show me a simple example?
Just add a url you would like to share to any of the share button components and you are ready to go! There are additional setting you can put in for each place you share

```html
<FacebookShareButton url="https://devmountain.com/">
  Click Here to Share on facebook
</FacebookShareButton>
```

## What if I want an icon with the share button?
They have them built in?
```html
<FacebookShareButton url="https://devmountain.com/">
    <FacebookIcon size={50} round={true} />
</FacebookShareButton>
```

## Share Counts? 
Got that to!

```html
<FacebookShareButton url="https://devmountain.com/">
  <div className="share_container">
    <FacebookIcon size={50} round={true} />
    <FacebookShareCount url="https://devmountain.com/" />
  </div>
</FacebookShareButton>
```

## Wow that is easy and cool!
<iframe src="https://giphy.com/embed/LaabpwEUXVUhq" width="480" height="274" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>