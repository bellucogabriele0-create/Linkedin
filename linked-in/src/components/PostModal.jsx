import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PostForm from "./PostForm";

const PostModal = function ({ close, postId }) {
  return (
    <Modal show onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>{postId ? "Modifica Post" : "Crea Post"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <PostForm close={close} postId={postId} />
      </Modal.Body>

    
    </Modal>
  );
};

export default PostModal;
