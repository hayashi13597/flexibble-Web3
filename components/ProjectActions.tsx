"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  deleteImage,
  deleteProject,
  fetchToken,
  getProjectDetails,
} from "@/lib/actions";

type Props = {
  projectId: string;
};

const ProjectActions = ({ projectId }: Props) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const router = useRouter();

  const handleDeleteProject = async () => {
    const check = confirm("Are you sure you want to delete this project?");

    if (!check) return;

    setIsDeleting(true);

    const { token } = await fetchToken();

    try {
      const { project }: any = await getProjectDetails(projectId);
      const imageParts = project.image.split("/");
      const imageNameWithPng = imageParts[imageParts.length - 1];
      const imageName = imageNameWithPng.split(".png")[0];
      await deleteImage(imageName);

      await deleteProject(projectId, token);

      router.push("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <Link
        href={`/edit-project/${projectId}`}
        className="flexCenter edit-action_btn"
      >
        <Image src="/pencile.svg" width={15} height={15} alt="edit" />
      </Link>

      <button
        type="button"
        disabled={isDeleting}
        className={`flexCenter delete-action_btn ${
          isDeleting ? "bg-gray" : "bg-primary-purple"
        }`}
        onClick={handleDeleteProject}
      >
        <Image src="/trash.svg" width={15} height={15} alt="delete" />
      </button>
    </>
  );
};

export default ProjectActions;
