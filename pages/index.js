import { Geist, Geist_Mono } from "next/font/google";
import Counter from './counter';
import FormComponent from './InputForm';
import FaveColor from './Colorbuttons'
import Winners from './Winners';
import Nav from './nav';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <h1>Welcome to my page! My name is Raj Patel, and this is Assignment 1</h1>
      <Nav />
      <br></br>
      <Counter />
      <br></br><br></br>
      <FormComponent title="Please enter your information" />
      {/* Showcasing props */}
      <br></br><br></br>
      <FaveColor />
      <br></br><br></br>
      <Winners title="Click the league to view past 5 champions" />

    </>)
}