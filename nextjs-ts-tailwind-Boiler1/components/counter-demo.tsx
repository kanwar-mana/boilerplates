"use client"

import { useSelector, useDispatch } from "react-redux"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RootState } from "@/lib/store"
import { increment, decrement, incrementByAmount } from "@/lib/features/counter/counterSlice"

export function CounterDemo() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Redux Counter Demo</CardTitle>
        <CardDescription>
          Demonstrates Redux Toolkit state management
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-4xl font-bold">{count}</div>
          <p className="text-muted-foreground">Current count</p>
        </div>
        
        <div className="flex justify-center gap-2">
          <Button onClick={() => dispatch(decrement())} variant="outline">
            -1
          </Button>
          <Button onClick={() => dispatch(increment())}>
            +1
          </Button>
          <Button onClick={() => dispatch(incrementByAmount(5))} variant="secondary">
            +5
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
