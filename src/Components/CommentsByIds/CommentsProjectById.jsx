import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCommentByProjectId } from "../../Redux/Slicers/CommentSlicer";
import CardComments from '../CardComments/CardComments';
const CommentsProjectById = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCommentByProjectId(id));
  }, [dispatch, id]);

  const comentarios = useSelector((state) => state.comment.commentByProjectId);

  return (
    <div>
      {comentarios.map((c) => {
        return <CardComments key={c.id} comment={c.comment} />;
      })}
    </div>
  );
};

export default CommentsProjectById;
