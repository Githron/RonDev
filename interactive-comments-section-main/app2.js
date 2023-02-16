const data = {
    currentUser: {
        image: {
            png: "./images/avatars/image-juliusomo.png",
            webp: "./images/avatars/image-juliusomo.webp",
        },
        username: "juliusomo",
    },
    comments: [
        {
            parent: 0,
            id: 1,
            content:
                "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
            createdAt: "1 month ago",
            score: 12,
            user: {
                image: {
                    png: "./images/avatars/image-amyrobson.png",
                    webp: "./images/avatars/image-amyrobson.webp",
                },
                username: "amyrobson",
            },
            replies: [],
        },
        {
            parent: 0,
            id: 2,
            content:
                "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            createdAt: "2 weeks ago",
            score: 5,
            user: {
                image: {
                    png: "./images/avatars/image-maxblagun.png",
                    webp: "./images/avatars/image-maxblagun.webp",
                },
                username: "maxblagun",
            },
            replies: [
                {
                    parent: 2,
                    id: 1,
                    content:
                        "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                    createdAt: "1 week ago",
                    score: 4,
                    replyingTo: "maxblagun",
                    user: {
                        image: {
                            png: "./images/avatars/image-ramsesmiron.png",
                            webp: "./images/avatars/image-ramsesmiron.webp",
                        },
                        username: "ramsesmiron",
                    },
                },
                {
                    parent: 2,
                    id: 1,
                    content:
                        "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                    createdAt: "2 days ago",
                    score: 2,
                    replyingTo: "ramsesmiron",
                    user: {
                        image: {
                            png: "./images/avatars/image-juliusomo.png",
                            webp: "./images/avatars/image-juliusomo.webp",
                        },
                        username: "juliusomo",
                    },
                },
            ],
        },
    ],
};
// This function takes a DocumentFragment and a parent element, and appends the fragment to the parent.
function appendFrag(frag, parent) {
    // Converts the child nodes of the fragment to an array, and stores them in a variable.
    var children = [].slice.call(frag.childNodes, 0);
    $(parent).append(frag);
    // Returns the second child node of the fragment (assuming that the first child node is a text node).
    return children[1];
}

// This function adds a new comment to the data object.
const addComment = (body, parentId, replyTo = undefined) => {
    // Gets the comment parent (either the top-level comments or a reply thread).
    let commentParent =
        parentId === 0
            ? data.comments
            : data.comments.filter((c) => c.id == parentId)[0].replies;
    // Creates a new comment object.
    let newComment = {
        parent: parentId,
        id:
            commentParent.length == 0
                ? 1
                : commentParent[commentParent.length - 1].id + 1,
        content: body,
        createdAt: "Now",
        replyingTo: replyTo,
        score: 0,
        replies: parentId == 0 ? [] : undefined,
        user: data.currentUser,
    };
    // Adds the new comment to the appropriate parent.
    commentParent.push(newComment);
    // Re-initializes the comments section to display the new comment.
    initComments();
};

// Converted to jQuery
const deleteComment = (commentObject) => {
    if (commentObject.parent == 0) {
        // If the comment is a top-level comment, remove it from the data object's `comments` array
        data.comments = $.grep(data.comments, function (e) {
            return e != commentObject;
        });
    } else {
        // If the comment is a reply, remove it from the `replies` array of its parent comment
        let parentComment = data.comments.filter(
            (e) => e.id === commentObject.parent
        )[0];
        parentComment.replies = $.grep(parentComment.replies, function (e) {
            return e != commentObject;
        });
    }
    initComments();
};

const promptDel = (commentObject) => {
    // select the modal wrapper element
    const modalWrp = $(".modal-wrp");

    // remove the "invisible" class from the modal wrapper to show it
    modalWrp.removeClass("invisible");

    // add a click event listener to the "Yes" button inside the modal
    modalWrp.find(".yes").on("click", () => {
        // call the deleteComment function with the comment object to delete
        deleteComment(commentObject);

        // add the "invisible" class to the modal wrapper to hide it
        modalWrp.addClass("invisible");
    });

    // add a click event listener to the "No" button inside the modal
    modalWrp.find(".no").on("click", () => {
        // add the "invisible" class to the modal wrapper to hide it
        modalWrp.addClass("invisible");
    });
};

// This function creates a reply input box and adds it to the DOM
const spawnReplyInput = (parent, parentId, replyTo = undefined) => {
    // Removes existing reply input boxes
    $(parent).find(".reply-input").remove();
    // Clones the reply input box template from the HTML file
    const inputTemplate = $(".reply-input-template").get(0);
    const inputNode = inputTemplate.content.cloneNode(true);
    // Adds the cloned input box to the parent element
    const addedInput = appendFrag(inputNode, parent);
    // Adds an event listener to the submit button
    $(addedInput)
        .find(".bu-primary")
        .click(() => {
            // Gets the value of the comment input box
            let commentBody = $(addedInput).find(".cmnt-input").val();
            // If the input box is empty, do nothing
            if (commentBody.length == 0) return;
            // Calls the addComment function with the comment body, parent ID, and replyTo ID
            addComment(commentBody, parentId, replyTo);
        });
};

// this is jQuery
const createCommentNode = (commentObject) => {
    const commentTemplate = $(".comment-template");
    var commentNode = commentTemplate[0].content.cloneNode(true);
    commentNode.querySelector(".usr-name").textContent =
        commentObject.user.username;
    commentNode.querySelector(".usr-img").src = commentObject.user.image.webp;
    commentNode.querySelector(".score-number").textContent =
        commentObject.score;
    commentNode.querySelector(".cmnt-at").textContent = commentObject.createdAt;
    commentNode.querySelector(".c-body").textContent = commentObject.content;
    if (commentObject.replyingTo)
        commentNode.querySelector(".reply-to").textContent =
            "@" + commentObject.replyingTo;

    commentNode.querySelector(".score-plus").addEventListener("click", () => {
        commentObject.score++;
        initComments();
    });

    commentNode.querySelector(".score-minus").addEventListener("click", () => {
        commentObject.score--;
        if (commentObject.score < 0) commentObject.score = 0;
        initComments();
    });
    if (commentObject.user.username == data.currentUser.username) {
        commentNode.querySelector(".comment").classList.add("this-user");
        commentNode.querySelector(".delete").addEventListener("click", () => {
            promptDel(commentObject);
        });

        commentNode.querySelector(".edit").addEventListener("click", (e) => {
            const path = e.path[3].querySelector(".c-body");
            // const path = e.target.closest(".comment-template").querySelector(".c-body");
            if (
                path.getAttribute("contenteditable") == false ||
                path.getAttribute("contenteditable") == null
            ) {
                path.setAttribute("contenteditable", true);
                path.focus();
            } else {
                path.removeAttribute("contenteditable");
            }
        });

        return commentNode;
    }
    return commentNode;
};
// jQuery

// This function appends a comment to a parent node and adds an event listener for the reply button
const appendComment = (parentNode, commentNode, parentId) => {
    // This line selects the "reply" button in the commentNode, if it exists
    const bu_reply = $(commentNode).find(".reply");

    // This line appends the commentNode to the parentNode using a helper function called "appendFrag", and stores the result in a new jQuery object called "appendedCmnt"
    const appendedCmnt = $(appendFrag(commentNode, parentNode));

    // This line selects the username from the appended comment, so we can use it later in the event listener
    const replyTo = appendedCmnt.find(".usr-name").text();

    // This line adds an event listener to the "reply" button in the commentNode
    bu_reply.on("click", () => {
        // This "if" statement checks whether the parentNode already has a "replies" class (indicating that it already has child comments)
        if ($(parentNode).hasClass("replies")) {
            // If it does, we call a function called "spawnReplyInput" to create a new input field for replying, passing in the parentNode, parentId, and username we just selected
            spawnReplyInput(parentNode, parentId, replyTo);
        } else {
            // If the parentNode doesn't have a "replies" class yet, we find the ".replies" element in the appended comment (which we just added), and use that as the parentNode for the new reply input field
            spawnReplyInput(
                appendedCmnt.find(".replies").get(0),
                parentId,
                replyTo
            );
        }
    });
};

// This function initializes the comments section by taking a comment list and a parent element as arguments.
function initComments(
    commentList = data.comments, // the default value of the commentList is taken from the data object's comments array
    parent = document.querySelector(".comments-wrp") // the default value of the parent element is the DOM element with the class "comments-wrp"
) {
    parent.innerHTML = ""; // This clears the parent element's inner HTML
    // This loops through each comment in the commentList and creates a new comment node
    commentList.forEach((element) => {
        var parentId = element.parent == 0 ? element.id : element.parent; // If the element's parent is 0, set the parent ID to the element's ID. Otherwise, set it to the element's parent ID.
        const comment_node = createCommentNode(element); // This creates a new comment node using the createCommentNode function, passing in the current element
        // If the element has replies, call the initComments function recursively to initialize the replies section
        if (element.replies && element.replies.length > 0) {
            initComments(
                element.replies,
                comment_node.querySelector(".replies")
            );
        }
        appendComment(parent, comment_node, parentId); // This appends the comment node to the parent element
    });
}

// This initializes the comments section by calling the initComments function with default values
initComments();

const cmntInput = document.querySelector(".reply-input"); // This selects the comment input element
// This adds an event listener to the "post comment" button
cmntInput.querySelector(".bu-primary").addEventListener("click", () => {
    let commentBody = cmntInput.querySelector(".cmnt-input").value; // This gets the text value of the comment input field
    if (commentBody.length == 0) return; // If the comment is empty, do not proceed
    addComment(commentBody, 0); // This calls the addComment function, passing in the comment body and a parent ID of 0
    cmntInput.querySelector(".cmnt-input").value = ""; // This clears the comment input field
});

//
