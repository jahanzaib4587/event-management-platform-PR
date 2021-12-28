export const componentStyles = {
  tabsHolder: {
    width: "100%",
    // display: "flex",
    // flexDirection: "column",
    // flexColumn: "column-reverse",
    // height: "-webkit-fill-available",
  },
  tabPaneHolder: {
    // height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#4E5054",
    borderBottom: "none",
    borderRadius: "20px",
    paddingInline: "15px",
    position: "absolute",
    zIndex: "1",
  },
  h100: {
    height: "100%",
  },
  sendChatIcon: {
    all: "unset ",
    cursor: "pointer",
  },
  sendIconHolder: {
    transform: "rotate(310deg)",
    fontSize: "20px",
    color: "#fff",
  },
  emojiIcon: {
    fontSize: "20px",
    color: "#fff",
    marginRight: "10px",
  },
  mainChatContainer: {
    width: "100%",
    border: "none",
    height: "50vh ",
    display: "flex",
    flexDirection: "column",
    paddingInline: "10px",
    overflow: "auto",
  },
  messageArrayList: {
    overflow: "auto",
    flex: "1",
  },
  messageRow: {
    display: "flex",
    alignItems: "flex-start",
  },
  messageRowRevert: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row-reverse",
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  mr10: {
    marginRight: "10px",
  },
  senderName: {
    color: "#fff",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "8px",
    lineHeight: "10px",
  },
  sendMessageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mainChatMessageInput: {
    borderRadius: "50px",
    border: "none",
    padding: "10px",
    paddingInline: "15px",
  },
};
