import { Tag, Input, Tooltip, Button, Row, Col } from "antd";
import React from "react";
class TagsComponent extends React.Component {
  state = {
    tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"],
    inputVisible: false,
    inputValue: "",
  };

  handleClose = (removedTag) => {
    const tags = this.state.tags.filter((tag) => tag !== removedTag);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: "",
    });
  };

  saveInputRef = (input) => (this.input = input);

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (
      <Row gutter={16} justify="flex-start">
        {tags.map((tag, index) => {
          const isLongTag = tag.length > 20;
          const tagElem = (
            // <Col md={6} lg={6}>
            <Tag
              style={{
                width: "22%",
                height: "38px",
                padding: "8px",
                paddingInline: "15px",
                borderRadius: "10px",
                background: "#3B3C40",
                border: "0px",
                textAlign: "center",
                color: "#fff",
                fontSize: "18px",
                marginBottom: "10px",
              }}
              key={tag}
              closable={index >= 4}
              afterClose={() => this.handleClose(tag)}
            >
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </Tag>
            // </Col>
          );
          return isLongTag ? (
            <Tooltip
              title={tag}
              key={tag}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
        {inputVisible && (
          <Col md={6} lg={6}>
            <Input
              maxLength={4}
              ref={this.saveInputRef}
              type="text"
              size="middle"
              style={{
                width: "100%",
                height: "38px",
                borderRadius: "10px",
                background: "#3B3C40",
                border: "0px",
                textAlign: "center",
                color: "#fff",
                fontSize: "18px",
              }}
              value={inputValue}
              onChange={this.handleInputChange}
              onBlur={this.handleInputConfirm}
              onPressEnter={this.handleInputConfirm}
            />
          </Col>
        )}
        {!inputVisible && (
          <Button
            size="small"
            type="dashed"
            onClick={this.showInput}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#3B3C40",
              border: "0px",
              textAlign: "center",
              color: "#fff",
              fontSize: "18px",
              alignSelf: "center",
            }}
          >
            +
          </Button>
        )}
      </Row>
    );
  }
}

// ReactDOM.render(<TagsComponent />, mountNode);
export default TagsComponent;
