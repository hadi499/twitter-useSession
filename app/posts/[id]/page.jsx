"use client";

import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { useEffect, useState } from "react";
import Post from "../../components/Post";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import Sidebar from "../../components/Sidebar";
import Rightbar from "../../components/Rightbar";
import { AnimatePresence, motion } from "framer-motion";
import Comment from "../../components/Comment";

export default function PostPage({ params }) {
  const router = useRouter();
  const { data: session } = useSession();
  const id = params.id;
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    onSnapshot(doc(db, "posts", id), (snapshot) => {
      console.log(snapshot?.data());
      setPost(snapshot);
    });
  }, [id, db]);
  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => setComments(snapshot.docs)
    );
  }, [db, id]);

  console.log(post);

  return (
    <main className="flex min-h-screen mx-auto">
      <Sidebar />
      <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex items-center space-x-2  py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="hoverEffect" onClick={() => router.push("/")}>
            <ArrowLeftIcon className="h-5 " />
          </div>
          <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Tweet</h2>
        </div>
        <Post id={params.id} post={post} />
        {comments.length > 0 && (
          <div className="">
            <AnimatePresence>
              {comments.map((comment) => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Comment
                    key={comment.id}
                    commentId={comment.id}
                    originalPostId={id}
                    comment={comment.data()}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
      <Rightbar />
    </main>
  );
}
