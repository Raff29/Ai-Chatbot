"use client";

import { useCompletion } from "ai/react";
import { Button, Card, CardBody, CardHeader, Textarea } from "@nextui-org/react";
import LoadingButton from "../components/LoadingButton";

export default function Completion() {
  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion({
    api: "/api/completion",
  });

  return (
    <div className="mx-auto w-full max-w-xl py-40 h-screen flex-col stretch ">
      <Card shadow="md"  >
        <CardHeader>
          <h4>NS-ChatBot</h4>
        </CardHeader>
        <CardBody>
          {completion}
          <form className="mt-4" onSubmit={handleSubmit}>
        <div className="flex items-center gap-4">
          <Textarea
            placeholder="Say something..."
            value={input}
            onChange={handleInputChange}
            fullWidth
          />
          <div className="flex flex-col gap-2">
            <Button onClick={stop} color="danger">
              Stop
            </Button>
            {isLoading ? (
              <LoadingButton />
            ) : (
              <Button color="primary" type="submit">
                Send
              </Button>
            )}
          </div>
        </div>
      </form>
          </CardBody>
      </Card>
      
    </div>
  );
}
