FS.HTTP.setBaseUrl('/data');

var memeStore = new FS.Store.FileSystem("images", { });

Memes = new FS.Collection("memes", {
  stores: [memeStore]
});