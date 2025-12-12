import { Form, Button } from "react-bootstrap";
import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getPostsProfile } from "../redux/actions";

const PostForm = function ({ postId, close }) {
  const [post, setPost] = useState({
    text: "",
  });
  const dispatch = useDispatch();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZTM5MGQzMjJmNTAwMTUxMDc2YjkiLCJpYXQiOjE3NjUyOTA2NTQsImV4cCI6MTc2NjUwMDI1NH0.VJvGSSmDcPbUfZIrUmeBRIuPb4Zj0J41kYkWAJBR4pc";
  const postProfile = function () {
    const isEditing = !!postId;
    const endpoint = isEditing
      ? `https://striveschool-api.herokuapp.com/api/posts/${postId}`
      : `https://striveschool-api.herokuapp.com/api/posts/`;
    const method = isEditing ? "PUT" : "POST";
    const successMessage = isEditing
      ? "Esperienza aggiornata correttamente!"
      : "Esperienza salvata correttamente!";
    const postToSend = {
      text: post.text,
    };
    fetch(endpoint, {
      method: method,
      body: JSON.stringify(postToSend),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((r) => {
        if (r.ok) {
          alert(successMessage);
          dispatch(getPostsProfile());
          if (close) close();
        } else {
          throw new Error("Errore nella response " + r.status);
        }
      })
      .catch((err) => {
        console.log("Errore", err);
        alert("Errore nel salvataggio del post");
      });
  };
  const deletePost = function () {
    if (!postId) return;

    if (!window.confirm("Sei sicuro di voler eliminare questo post?")) {
      return;
    }

    const finalEndpoint = `https://striveschool-api.herokuapp.com/api/posts/${postId}`;

    fetch(finalEndpoint, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((r) => {
        if (r.ok) {
          alert("Post eliminato correttamente!");
          dispatch(getPostsProfile());
          if (close) close();
        } else {
          throw new Error("Errore nell'eliminazione " + r.status);
        }
      })
      .catch((err) => {
        console.log("Errore", err);
        alert("Errore nell'eliminazione del post");
      });
  };
  const getEdit = useCallback(
    function (postId) {
      const finalEndpoint = `https://striveschool-api.herokuapp.com/api/posts/${postId}`;

      fetch(finalEndpoint, { headers: { Authorization: `Bearer ${token}` } })
        .then((r) => {
          if (r.ok) return r.json();
          else throw new Error("Errore nel recupero post " + r.status);
        })
        .then((data) => {
          console.log("Data ricevuta:", data);
          setPost({
            text: data.text,
          });
        })
        .catch((err) => {
          console.error("Errore completo:", err);
          alert("Errore nel caricamento del post");
        });
    },
    [postId, token]
  );
  useEffect(() => {
    if (postId) {
      getEdit(postId);
    }
  }, [postId, getEdit]);
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        postProfile();
      }}
    >
      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Crea Post</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          placeholder="Scrivi qualcosa..."
          value={post.text}
          onChange={(e) => {
            setPost({
              ...post,
              text: e.target.value,
            });
          }}
          required
        />
      </Form.Group>
      <Button
        variant="danger"
        className="me-2"
        type="button"
        onClick={deletePost}
      >
        Elimina
      </Button>
      <Button variant="secondary" type="submit">
        {postId ? "Salva Modifiche" : "Salva"}
      </Button>
    </Form>
  );
};
export default PostForm;
