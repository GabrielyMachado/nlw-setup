interface HabitsProps {
    completed: number
}

export function Habit(props: HabitsProps) {
    return(
        <div className="bg-zinc-900 w-10">{props.completed}</div>
    )
}