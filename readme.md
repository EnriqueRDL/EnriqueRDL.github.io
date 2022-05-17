# Read Me

[TOC]

## Blog Posts

### Recommended Options

The only required variable for posts is `title` but it's best to use all the things recommended in the table below.

| Variable              | Type      | Description                                                  |
| --------------------- | --------- | ------------------------------------------------------------ |
| `title`               | `string`  | This is the title of the post. It appears in the title tag, meta tags, and other places. |
| `category/categories` | `string`  | The category of your post. Use a space between tags and not commas. Example: `tutorials programming` |
| `tags`                | `string`  | The tags your post is related to. Use a space between tags and not commas. Example: `how-to html css js ` |
| `date`                | `date`    | This is the date the post was written. It's not necessary because the date is already located in the file name of a post but it is still best practice. Format should be `YYYY-MM-DD`. |
| `description`         | `string`  | A short description of the post. It's seen in meta tags and sometimes as excerpts. |
| `keywords`            | `string`  | This is used in the meta keywords tag. Use a space between tags and not commas. Example: `how-to html css js ` |
| `image`               | `boolean` | The main image of the post. If `true` this may be used by the theme when displaying posts but it is also used as a fallback for Facebook Open Graph and Twitter Card. The way to use this is to go into `assets/images/blog/` and place an image with the post slug followed by -image, example: `post-slug-image.jpg`. The `jpg` file format must used. |
| `ogimage`             | `boolean` | This image is used for Facebook Open Graph. Follow the instructions for the `image` variable but the image name should be the post slug followed by -ogimage. Example: `post-slug-ogimage.jpg`. |
| `twitterimage`        | `boolean` | This image is used for Twitter Card. Follow the instructions for the `image` variable but the image name should be the post slug followed by -ogimage. Example: `post-slug-twitterimage.jpg`. |

### Other Options

| Variable          | Type      | Description                                                  |
| ----------------- | --------- | ------------------------------------------------------------ |
| `layout`          | `string`  | Select the type of layout you want your post to use. The default is `post`. |
| `nodefaultstyles` | `boolean` | If `true` the `style.css` file will not be loaded.           |
| `noindexfollow`   | `boolean` | If `true` this will tell search engines not to index the page as well as to not follow any links located in the post. |

