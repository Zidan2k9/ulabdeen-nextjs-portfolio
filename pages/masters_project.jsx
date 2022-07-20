import Link from "next/link";
import Image from "next/image";
import React from "react";
import contacts_keeper from "../public/assets/projects/contacts_keeper.png";
import msc_software_design from "../public/assets/projects/msc_software_design.png";
import msc_distance_estimation from "../public/assets/projects/msc_distance_estimation.png";
import { RiRadioButtonFill } from "react-icons/ri";

const masters_project = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={contacts_keeper}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 dark:text-green-600">
            Masters Project - Smartphone Based Real-Time Object Detection
            Solution To Aid In Navigation For Individuals With Physical
            Disabilities{" "}
          </h2>
          <h3 className="dark:text-green-700">
            Android Studio, Java, TensorFlow, Google Colab, YOLOv4Tiny
          </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-xl">
            A Deep Learning model trained on a set of objects integrated in a
            Android application to warn users of said objects in real-time.
            Tested indoors and outdoors. Intended as a Proof of Concept.
          </p>
          <p>
            For the dissertation project of my MSc Private Cloud, I created an
            Android application that detects objects that could pose a potential
            hazard to end-users. A Deep Learning model called YOLOv4 Tiny based
            on the DarkNet architecture was trained on five objects: doors,
            stairs, sports balls, knives and hazardous road surfaces. The
            inspiration for this project is my life-expierence living with a
            physical disablity called Cerebral Palsy and I was the test subject.
          </p>

          <p>Project Outline:</p>

          <ul className="list-disc">
            <li>
              Due to the complexity of the project and the number of
              technologies involved, the software architcture design is broken
              down into 4 stages:
            </li>
            <Image src={msc_software_design}></Image>
            <li>
              The first stage involves -
              <ol className="list-decimal list-inside">
                <li>
                  gathering a dataset of images containing the objects the
                  Object Detector will be trained on.
                </li>
                <li>
                  The objects from images are then manually labelled with boxes
                  drawn around them to help the object detector classify and
                  localise the objects in the images.
                </li>
                <li>Afterwards any duplicates are removed </li>
                <li>
                  the dataset is split into 80:20 training and testing sets
                </li>
              </ol>
            </li>
            <li>
              At the second stage -
              <ol className="list-decimal list-inside">
                <li>The sets are mounted to Google Drive</li>
                <li>
                  the DarkNet framework GitHub repository is cloned in a Google
                  Colab instance
                </li>
                <li>The images are copied to the DarkNet directory</li>
                <li>The YOLOv4Tiny parameters are configured</li>
                <li>
                  YOLOv4 Tiny convolutional layers are utilised to accelerate
                  the training process
                </li>
                <li>
                  A NVIDIA Tesla K80 GPU is allocated by Google Colab (GPU is
                  recommended to acclerate the training of the Object Detector){" "}
                </li>
                <li>
                  During the training stage, the object detector learns to
                  identify objects from their distinct features by going through
                  the training dataset for multiple iterations until the Mean
                  Average Precision (mAP - determines the accuracy of a
                  prediction, ranging from 0-100%) reaches its peak .
                </li>
              </ol>
            </li>
            <li>
              The final model is converted to the mobile-friendly TensorFlow
              Lite format in the third stage
              <ol className="list-decimal list-inside">
                <li>First,converted to .PB format</li>
                <li>Secondly, converted to .TFLITE formate</li>
              </ol>
            </li>
            <li>
              The final stage focuses on the development of the Android
              application, the implementations of the TFLITE model and a
              real-time distance estimation algorithm
              <ol className=" list-decimal list-inside">
                <li>
                  {" "}
                  Due to time constraints, the application was not created from
                  scratch:{" "}
                  <a
                    href="https://github.com/hunglc007/tensorflow-yolov4-tflite"
                    className="underline"
                  >
                    hunglc007&apos;s codebase{" "}
                  </a>{" "}
                  was the foundation for the application
                </li>
                <li>The trained TFLite Model was integrated</li>
                <li>
                  The real-time distance estimation algorithm (let&apos;s the
                  end-user know how close they are to an object) was integrated.
                  <Image src={msc_distance_estimation}></Image>
                </li>
                <li>
                  Smartphone vibrations were triggered when the end-user is
                  close enough to an object.
                </li>
                <li>
                  Audio is played to let the end-user know of the relevant
                  detected object, implemented with the aid of the MediaPlayer
                  class to play raw audio files in real-time
                </li>
                <li>
                  Once detected, the object is surrounded with a coloured
                  bounding box with its mAP value and label
                </li>
              </ol>
            </li>
          </ul>

          <a href="https://drive.google.com/file/d/14a4YF-lIlDKwH2VVLJney6pkzkw9qK9T/view?usp=sharing">
            <button className="px-8 py-2 mt-4 mr-8 text-green-100">
              Dissertation Paper
            </button>
          </a>
          <a href="https://github.com/Zidan2k9/msc-thesis-realtime-tensorflow-objectdetector">
            <button className="px-8 py-2 mt-4 mr-8 text-green-100">
              GitHub repository
            </button>
          </a>
          <a href="https://youtu.be/e8I-0vD6KfQ">
            <button className="px-8 py-2 mt-4 mr-8 text-green-100">
              Video Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-green-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 dark:text-green-400">
              Stack
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <a
                className="underline"
                href="https://github.com/AlexeyAB/darknet"
              >
                <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                  <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                  DarkNet Framework
                </p>
              </a>
              <a
                className="underline"
                href="https://techzizou.com/yolov4-vs-yolov4-tiny-custom/"
              >
                <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                  <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                  YOLOv4 Tiny
                </p>
              </a>
              <a
                className="underline"
                href="https://github.com/heartexlabs/labelImg"
              >
                <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                  <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                  LabelIMG
                </p>
              </a>
              <a
                className="underline"
                href="https://www.bulkrenameutility.co.uk/"
              >
                <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                  <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                  Bulk Rename
                </p>
              </a>
              <a
                className="underline"
                href="https://www.easyduplicatefinder.com/"
              >
                <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                  <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                  Duplicate Finder
                </p>
              </a>
              <a
                className="underline"
                href="https://research.google.com/colaboratory/faq.html"
              >
                <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                  <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                  Google Colab
                </p>
              </a>
              <a className="underline" href="https://jupyter.org/">
                <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                  <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                  Jupyter Notebooks
                </p>
              </a>

              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Python
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Unix
              </p>
              <a
                className="underline"
                href="https://www.tensorflow.org/lite/android"
              >
                <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                  <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                  TensorFlow Lite
                </p>
              </a>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Android Studio
              </p>
              <p className="text-green-800 py-2 flex items-center dark:text-green-400">
                <RiRadioButtonFill className="pr-1 dark:text-green-400 dark:shadow-xl" />{" "}
                Git
              </p>
            </div>
          </div>
        </div>
        <Link href="/#work">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default masters_project;
