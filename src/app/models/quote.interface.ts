export interface Quote {
    shareCount: Number;
    likeCount : Number;
    viewCount : Number;
    topics    : String[];
    author    : {
        died        : String;
        born        : String;
        profession  : String;
        intro       : String;
        name        : String;
        id          : String;
    };
    quote     : String;
    id        : String;
}