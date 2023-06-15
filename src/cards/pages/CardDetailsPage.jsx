import React from "react";
import { useParams } from "react-router-dom";

export default function CardDetailsPage() {
  const { id } = useParams();
  return <div>welcome to card details page for card {id}</div>;
}

//יש ליצור את הקומפוננטה הזאת
//יש להוסיף את הנתיב אליה בראוטר
//יש לנווט אליה באמצעות ההוק של ראוטר בעמוד ביזנס קארד בלחיצה על הכרטיס
