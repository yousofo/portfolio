
  const SpinningBullet = ({ className, width  ,delay} : { className: string; width: string;delay:string }) => {
    return (
        <div
            className="relative spinning-bullet-box w-20 h-20 "
            style={{ width: `calc(${width}vw + 150px)`, height:`calc(${width}vh + 50px)` }}
        >
            <div className="circular   spinning-bullet " style={{animationDelay:delay+"s"}}>
                {<span className={"bg-amber-300" + " " + className}></span>}
            </div>
        </div>
    );
};

export default SpinningBullet;
