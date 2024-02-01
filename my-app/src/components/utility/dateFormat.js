import { formatDistanceToNow } from "date-fns";

export const dateFormatToNow = (publishDate) => {
    let timeAgo
    return timeAgo = formatDistanceToNow(new Date(publishDate), {
        addSuffix: true,
    });
}
