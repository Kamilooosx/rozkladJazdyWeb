// CONSTS

const text = document.querySelector('.text')
// const bus23p = document.getElementById("bus23p");
const timetable23p = document.getElementById("bus23pr");
const bus223 = document.getElementById("bus223");
const bus223r = document.getElementById("bus223r");
const bus210 = document.getElementById("bus210");
const bus210r = document.getElementById("bus210r");
const bus228 = document.getElementById("bus228");
const bus228r = document.getElementById("bus228r");
const SelectBus = document.getElementById('przystanek')
const whereBus = document.getElementById('where')
const whatDay = document.getElementById('whatDay')
const image = document.querySelector('.lottie')

const btn1 = document.getElementById('where1')
const btn2 = document.getElementById('where2')
const fajeczka1 = document.getElementById('chosenniechobrz')
const fajeczka2 = document.getElementById('chosenrzeszow')
const napisy = [...document.querySelectorAll('h2')]


// FUNCTIONS 


const pokazRozklad = (rozkl223, rozkl23p, rozkl210, rozkl228) => {
    let newRozkl223 = rozkl223.split(" ").join(" - ");
    let timetable210 = rozkl210.split(" ").join(" - ");
    let newTimetable23p = rozkl23p.split(" ").join(" - ");
    let newRozkl228 = rozkl228.split(" ").join(" - ");
    bus223.textContent = "223"
    bus223r.textContent = newRozkl223
    // bus23p.textContent = "23P"
    // timetable23p.textContent = newTimetable23p
    bus210.textContent = "210"
    bus210r.textContent = timetable210
    bus228.textContent = "228"
    bus228r.textContent = newRozkl228
    image.style.display = 'none'
    bus210.style.display = 'block'
    bus228.style.display = 'block'
    // bus23p.style.display = 'block'
    bus223.style.display = 'block'
    bus210r.style.display = 'block'
    bus228r.style.display = 'block'
    // timetable23p.style.display = 'block'
    bus223r.style.display = 'block'
}

const hideRozklad = () => {
    pokazRozklad("", "", "", "")
    bus210.style.display = 'none'
    bus228.style.display = 'none'
    bus23p.style.display = 'none'
    bus223.style.display = 'none'
    bus210r.style.display = 'none'
    bus228r.style.display = 'none'
    timetable23p.style.display = 'none'
    bus223r.style.display = 'none'
    image.style.display = 'block'
}

const onlykudlik = () => {
    bus210.style.display = 'none'
    bus228.style.display = 'none'
    bus223.style.display = 'none'
    bus210r.style.display = 'none'
    bus228r.style.display = 'none'
    bus223r.style.display = 'none'
}

const only223 = () => {
    bus210.style.display = 'none'
    bus228.style.display = 'none'
    bus23p.style.display = 'none'
    bus210r.style.display = 'none'
    bus228r.style.display = 'none'
    timetable23p.style.display = 'none'
}

const remove210and228 = () => {
    bus210.style.display = 'none'
    bus228.style.display = 'none'
    bus210r.style.display = 'none'
    bus228r.style.display = 'none'
}

const only210 = () => {
    bus223.style.display = 'none'
    bus23p.style.display = 'none'
    bus223r.style.display = 'none'
    timetable23p.style.display = 'none'
}

const only228 = () => {
    bus210.style.display = 'none'
    bus223.style.display = 'none'
    bus23p.style.display = 'none'
    bus210r.style.display = 'none'
    bus223r.style.display = 'none'
    timetable23p.style.display = 'none'
}

const only223and228 = () => {
    bus210.style.display = 'none'
    bus23p.style.display = 'none'
    bus210r.style.display = 'none'
    timetable23p.style.display = 'none'
}

const onlykudlikand228 = () => {
    bus223.style.display = 'none'
    bus210.style.display = 'none'
    bus223r.style.display = 'none'
    bus210r.style.display = 'none'
}

const hide228 = () => {
    bus228.style.display = 'none'
    bus228r.style.display = 'none'
}

const hide210 = () => {
    bus210.style.display = 'none'
    bus210r.style.display = 'none'
}

const only223and210 = () => {
    bus228.style.display = 'none'
    bus23p.style.display = 'none'
    bus228r.style.display = 'none'
    timetable23p.style.display = 'none'
}



btn1.addEventListener('click', () => {
    if (two === btn2.value) {
        two = btn1.value
        btn2.classList.remove("bg")
        btn1.classList.add("bg")
        fajeczka1.classList.add('faja')
        fajeczka2.classList.remove('faja')
        jsfunc1()
    } else {
        two = btn1.value
        jsfunc1()
        btn1.classList.add("bg")
        fajeczka1.classList.add('faja')

    }
})


btn2.addEventListener('click', () => {
    if (two === btn1.value) {
        two = btn2.value
        btn1.classList.remove("bg")
        btn2.classList.add("bg")
        fajeczka2.classList.add('faja')
        fajeczka1.classList.remove('faja')
        jsfunc1()
    } else {
        two = btn2.value
        btn2.classList.add("bg")
        fajeczka2.classList.add('faja')
        jsfunc1()
    }
})

// TIME TABLE

let two

function jsfunc1() {

    let one = SelectBus.value
    let three = whatDay.value
    if (one == "val0" || two == "") hideRozklad()

    if (one == "val1") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:08 05:00 05:25 05:55 06:50 07:35 08:10 09:00 10:50 13:05 14:20G 15:25 16:45 17:45 19:15 20:30 22:20", "", "05:20 07:01 07:59 13:32 16:04 16:51", "")
            } else if (three == "saturday") {
                pokazRozklad("00:06 05:55 09:20 11:50 14:35 16:50 19:20 20:30 22:35", "", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("00:06mś 06:00 07:00 09:10 11:00 16:10 18:05 20:20", "", "", "")
                only223()
            }
        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:49 06:42 07:24 08:04 08:48 10:39 12:59 14:09G 15:14 16:34 17:38 19:09 20:19 22:15 00:03", "08:49 10:59 12:39 15:54 17:19", "06:11 06:52 12:28 14:58 16:04 22:04", "")
            } else if (three == "saturday") {
                pokazRozklad("05:51 09:06 11:36 14:26 16:44 19:11 20:19 22:24 00:04", "08:49 10:59 12:39 15:54 17:19", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("05:56 09:04 10:49 12:49 15:59 17:59 20:09", "", "", "")
                only223()
            }
        }
        hide228()
    }
    if (one == "val2") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:09 05:01 05:26 05:56 06:51 07:36 08:11 09:01 10:51 13:06 14:21G 15:26 16:46 17:46 19:16 20:31 22:21", "", "05:21 07:02 08:00 13:33 16:05 16:52", "")
            } else if (three == "saturday") {
                pokazRozklad("00:07 05:56 09:21 11:51 14:36 16:51 19:21 20:31 22:36", "", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("00:07mś 06:01 07:01 09:11 11:01 16:11 18:06 20:21", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:46 06:39 07:21 08:01 08:45 10:36 12:56 14:06G 15:11 16:31 17:35 19:06 20:16 22:12 00:00", "08:47 10:57 12:37 15:52 17:17", "06:10 06:51 12:27 14:57 16:03 22:03", "")
            } else if (three == "saturday") {
                pokazRozklad("05:50 09:04 11:34 14:24 16:42 19:09 20:17 22:22 00:03", "08:47 10:57 12:37 15:52 17:17", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("05:55 09:02 10:48 12:48 15:57 17:57 20:07", "", "", "")
                only223()
            }
        }
        hide228()
    }


    if (one == "val3") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:10 05:02 05:27 05:57 06:52 07:37 08:12 09:02 10:52 13:07 14:22G 15:27 16:47 17:47 19:17 20:32 22:22", "", "05:22 07:03 08:01 13:34 16:06 16:54", "")
            } else if (three == "saturday") {
                pokazRozklad("00:08 05:57 09:22 11:52 14:37 16:52 19:22 20:32 22:37", "", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("00:08mś 06:02 07:02 09:12 11:02 16:12 18:07 20:22", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:46 06:39 07:21 08:01 08:45 10:36 12:56 14:06G 15:11 16:31 17:35 19:06 20:16 22:12 00:00", "08:47 10:57 12:37 15:52 17:17", "06:09 06:50 12:26 14:56 16:02 22:02", "")
            } else if (three == "saturday") {
                pokazRozklad("05:49 09:03 11:33 14:23 16:41 19:08 20:16 22:21 00:02", "08:47 10:57 12:37 15:52 17:17", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("05:54 09:01 10:47 12:47 15:56 17:56 20:06", "", "", "")
                only223()
            }
        }
        hide228()
    }


    if (one == "val4") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:11 05:03 05:28 05:58 06:53 07:38 08:13 09:03 10:53 13:08 14:23G 15:28 16:48 17:48 19:18 20:33 22:23", "", "05:23 07:04 08:02 13:35 16:07 16:55", "")
            } else if (three == "saturday") {
                pokazRozklad("00:09 05:58 09:23 11:53 14:38 16:53 19:23 20:33 22:38", "", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("00:09mś 06:03 07:03 09:13 11:03 16:13 18:08 20:23", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:45 06:38 07:20 08:00 08:44 10:35 12:55 14:05G 15:10 16:30 17:34 19:05 20:15 22:11 23:59", "08:47 10:57 12:37 15:52 17:17", "06:08 06:49 12:25 14:55 16:01 22:01", "")
            } else if (three == "saturday") {
                pokazRozklad("05:48 09:02 11:32 14:22 16:40 19:07 20:15 22:20 00:01", "08:47 10:57 12:37 15:52 17:17", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("05:53 09:00 10:46 12:46 15:55 17:55 20:05", "", "", "")
                only223()
            }
        }
        hide228()
    }


    if (one == "val5") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:12 05:04 05:29 05:59 06:54 07:39 08:14 09:04 10:54 13:09 14:24G 15:29 16:49 17:49 19:19 20:34 22:24", "05:57 06:57 08:52 11:02 13:37 15:57", "05:24 07:05 08:03 13:36 16:08 16:56", "")
            } else if (three == "saturday") {
                pokazRozklad("00:10 05:59 09:24 11:54 14:39 16:54 19:24 20:34 22:39", "05:57 06:57 08:52 11:02 13:37 15:57", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("00:10mś 06:04 07:04 09:14 11:04 16:14 18:09 20:24", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:44 06:37 07:19 07:59 08:43 10:34 12:54 14:04G 15:09 16:29 17:33 19:04 20:14 22:10 23:58", "08:47 10:57 12:37 15:52 17:17", "06:07 06:48 12:24 14:54 16:00 22:00", "")
            } else if (three == "saturday") {
                pokazRozklad("05:47 09:01 11:31 14:21 16:39 19:06 20:14 22:19 00:00", "08:47 10:57 12:37 15:52 17:17", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("05:52 08:59 10:45 12:45 15:54 17:54 20:04", "", "", "")
                only223()
            }
        }
        hide228()
    }


    if (one == "val6") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:13 05:05 05:30 06:00 06:55 07:40 08:15 09:05 10:55 13:10 14:25G 15:30 16:50 17:50 19:20 20:35 22:25", "05:57 06:57 08:52 11:02 13:37 15:57", "05:25 07:06 08:04 13:37 16:09 16:57", "")
            } else if (three == "saturday") {
                pokazRozklad("00:11 06:00 09:25 11:55 14:40 16:55 19:25 20:35 22:40", "05:57 06:57 08:52 11:02 13:37 15:57", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("00:11mś 06:05 07:05 09:15 11:05 16:15 18:10 20:25", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:43 06:36 07:18 07:58 08:42 10:33 12:53 14:03G 15:08 16:28 17:32 19:03 20:13 22:09 23:57", "08:45 10:55 12:35 15:50 17:15", "06:06 06:47 12:23 14:53 15:59 21:59", "")
            } else if (three == "saturday") {
                pokazRozklad("05:46 09:00 11:30 14:20 16:38 19:05 20:13 22:18 23:59", "08:45 10:55 12:35 15:50 17:15", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("05:51 08:58 10:44 12:44 15:53 17:53 20:03", "", "", "")
                only223()
            }
        }
        hide228()
    }


    if (one == "val7") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:15 05:07 05:32 06:02 06:57 07:42 08:17 09:07 10:57 13:12 14:27G 15:32 16:52 17:52 19:22 20:37 22:27", "05:59 06:59 08:54 11:04 13:39 15:59", "05:27 07:08 08:06 13:39 16:11 16:59", "")
            } else if (three == "saturday") {
                pokazRozklad("00:13 06:02 09:27 11:57 14:42 16:57 19:27 20:37 22:42", "05:59 06:59 08:54 11:04 13:39 15:59", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("00:13mś 06:07 07:07 09:17 11:07 16:17 18:12 20:27", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:41 06:34 07:16 07:56 08:40 10:31 12:51 14:01G 15:06 16:26 17:30 19:01 20:11 22:07 23:55", "08:45 10:55 12:35 15:50 17:15", "06:04 06:45 12:21 14:51 15:57 21:57", "")
            } else if (three == "saturday") {
                pokazRozklad("05:44 08:58 11:28 14:18 16:36 19:03 20:11 22:16 23:57", "08:45 10:55 12:35 15:50 17:15", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("05:49 08:56 10:42 12:42 15:51 17:51 20:01", "", "", "")
                only223()
            }
        }
        hide228()
    }


    if (one == "val8") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:16 05:08 05:33 06:03 06:58 07:43 08:18 09:08 10:58 13:13 14:28G 15:33 16:53 17:53 19:23 20:38 22:28", "05:59 06:59 08:54 11:04 13:39 15:59", "05:28 07:09 08:07 13:40 16:12 17:00", "")
            } else if (three == "saturday") {
                pokazRozklad("00:14 06:03 09:28 11:58 14:43 16:58 19:28 20:38 22:43", "05:59 06:59 08:54 11:04 13:39 15:59", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("00:14mś 06:08 07:08 09:18 11:08 16:18 18:13 20:28", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:40 06:33 07:15 07:55 08:39 10:30 12:50 14:00G 15:05 16:25 17:29 19:00 20:10 22:06 23:54", "08:43 10:53 12:33 15:48 17:13", "06:03 06:44 12:20 14:50 15:56 21:56", "")
            } else if (three == "saturday") {
                pokazRozklad("05:43 08:57 11:27 14:17 16:35 19:02 20:10 22:15 23:56", "08:43 10:53 12:33 15:48 17:13", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("05:48 08:55 10:41 12:41 15:50 17:50 20:00", "", "", "")
                only223()
            }
        }
        hide228()
    }


    if (one == "val9") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:17 05:09 05:34 06:04 06:59 07:44 08:19 09:09 10:59 13:14 14:29 15:34 16:54 17:54 19:24 20:39 22:29", "06:01 07:01 08:56 11:06 13:41 16:01", "05:29 07:10 08:08 13:41 16:13 17:01", "")
            } else if (three == "saturday") {
                pokazRozklad("00:15 06:04 09:29 11:59 14:44 16:59 19:29 20:39 22:44", "06:01 07:01 08:56 11:06 13:41 16:01", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("00:15mś 06:09 07:09 09:19 11:09 16:19 18:14 20:29", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:39 06:32 07:14 07:54 08:38 10:29 12:49 13:59G 14:29F 15:04 16:24 17:28 18:59 20:09 22:05 23:53", "08:43 10:53 12:33 15:48 17:13", "06:02 06:43 12:19 14:49 15:55 21:55", "")
            } else if (three == "saturday") {
                pokazRozklad("05:42 08:56 11:26 14:16 16:34 19:01 20:09 22:14 23:55", "08:43 10:53 12:33 15:48 17:13", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("05:47 08:54 10:40 12:40 15:49 17:49 19:59", "", "", "")
                only223()
            }
        }
        hide228()
    }


    if (one == "val10") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:18 05:11 05:36 06:06 07:01 07:46 08:21 09:11 11:01 13:16 14:31 15:36 16:56 17:56 19:26 20:41 22:31", "06:01 07:01 08:56 11:06 13:41 16:01", "05:30 07:11 08:09 13:42 16:14 17:02", "")
            } else if (three == "saturday") {
                pokazRozklad("00:16 06:06 09:31 12:01 14:46 17:01 19:31 20:41 22:46", "06:01 07:01 08:56 11:06 13:41 16:01", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("00:16mś 06:11 07:10 09:21 11:10 16:21 18:16 20:31", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:38 06:30 07:12 07:52 08:37 10:28 12:48 13:58G 14:28F 15:03 16:23 17:27 18:58 20:08 22:04 23:52", "08:41 10:51 12:31 15:46 17:11", "06:00 06:41 12:17 14:47 15:53 21:54", "")
            } else if (three == "saturday") {
                pokazRozklad("05:41 08:55 11:25 14:15 16:33 19:00 20:08 22:13 23:54", "08:41 10:51 12:31 15:46 17:11", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("05:46 08:53 10:38 12:38 15:48 17:48 19:58", "", "", "")
                only223()
            }
        }
        hide228()
    }


    if (one == "val11") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:20 05:13 05:38 06:08 07:03 07:48 08:23 09:13 11:03 13:18 14:33 15:38 16:58 17:58 19:28 20:43 22:33", "06:03 07:03 08:58 11:08 13:43 16:03", "05:31 07:12 08:11 13:44 16:16 17:04", "")
            } else if (three == "saturday") {
                pokazRozklad("00:18 06:08 09:33 12:03 14:48 17:03 19:33 20:43 22:48", "06:03 07:03 08:58 11:08 13:43 16:03", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("00:18mś 06:13 07:12 09:23 11:12 16:23 18:18 20:33", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:36 06:28 07:10 07:50 08:35 10:26 12:46 13:56G 14:26F 15:01 16:21 17:25 18:56 20:06 22:02 23:50", "08:41 10:51 12:31 15:46 17:11", "05:58 06:39 12:15 14:45 15:51 21:52", "")
            } else if (three == "saturday") {
                pokazRozklad("05:39 08:53 11:23 14:13 16:31 18:58 20:06 22:11 23:52", "08:41 10:51 12:31 15:46 17:11", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("05:44 08:51 10:36 12:36 15:46 17:46 19:56", "", "", "")
                only223()
            }
        }
        hide228()
    }


    if (one == "val12") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:22 05:15 05:40 06:10 07:05 07:50 08:25 09:15 11:05 13:20 14:35 15:40 17:00 18:00 19:30 20:45 22:35", "06:03 07:03 08:58 11:08 13:43 16:03", "05:33 07:14 08:13 13:46 16:18 17:06", "")
            } else if (three == "saturday") {
                pokazRozklad("00:20 06:10 09:35 12:05 14:50 17:05 19:35 20:45 22:50", "06:03 07:03 08:58 11:08 13:43 16:03", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("00:20mś 06:15 07:14 09:25 11:14 16:25 18:20 20:35", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:34 06:26 07:08 07:48 08:33 10:24 12:44 13:54G 14:24F 14:59 16:19 17:23 18:54 20:04 22:00 23:48", "08:39 10:49 12:29 15:44 17:09", "05:56 06:37 12:13 14:43 15:49 21:50", "")
            } else if (three == "saturday") {
                pokazRozklad("05:37 08:51 11:21 14:11 16:29 18:56 20:04 22:09 23:50", "08:39 10:49 12:29 15:44 17:09", "", "")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("05:42 08:49 10:34 12:34 15:44 17:44 19:54", "", "", "")
                only223()
            }
        }
        hide228()
    }

    // ONLY 223 AND 210


    if (one == "val13") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:24 05:17 05:42 06:12 07:07 07:52 08:27 09:17 11:07 13:22 14:37 15:42 17:02 18:02 19:32 20:47 22:37", "", "05:34 07:15 08:14 13:47 16:20 17:08", "")
            } else if (three == "saturday") {
                pokazRozklad("00:22 06:12 09:37 12:07 14:52 17:07 19:37 20:47 22:52", "", "", "")
                only223()
            } else if (three == "sunday") {
                pokazRozklad("00:22mś 06:17 07:16 09:27 11:16 16:27 18:22 20:37", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:32 06:24 07:06 07:46 08:31 10:22 12:42 13:52G 14:22F 14:57 16:17 17:21 18:52 20:02 21:58 23:46", "", "05:55 06:36 12:11 14:41 15:47 21:49", "")
            } else if (three == "saturday") {
                pokazRozklad("05:35 08:49 11:19 14:09 16:27 18:54 20:02 22:07 23:48", "", "", "")
                only223()
            } else if (three == "sunday") {
                pokazRozklad("05:40 08:47 10:32 12:32 15:42 17:42 19:52", "", "", "")
                only223()
            }
        }
        only223and210()
    }
    if (one == "val14") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:25 05:18 05:43 06:13 07:09 07:54 08:29 09:19 11:09 13:24 14:39 15:44 17:03 18:03 19:33 20:48 22:38", "", "05:35 07:16 08:15 13:48 16:21 17:09", "")
            } else if (three == "saturday") {
                pokazRozklad("00:23 06:13 09:38 12:08 14:53 17:08 19:38 20:48 22:53", "", "", "")
                only223()
            } else if (three == "sunday") {
                pokazRozklad("00:23mś 06:18 07:17 09:28 11:17 16:28 18:23 20:38", "", "", "")
                only223()
            }
        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:31 06:23 07:05 07:45 08:29 10:20 12:40 13:50G 14:20F 14:55 16:15 17:19 18:50 20:00 21:57 23:45", "", "05:54 06:35 12:10 14:40 15:45 21:48", "")
            } else if (three == "saturday") {
                pokazRozklad("05:34 08:48 11:18 14:08 16:25 18:53 20:00 22:06 23:47", "", "", "")
                only223()
            } else if (three == "sunday") {
                pokazRozklad("05:39 08:46 10:30 12:30 15:41 17:41 19:51", "", "", "")
                only223()

            }
        }
        only223and210()
    }
    if (one == "val15") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:26 05:19 05:45 06:15 07:11 07:56 08:31 09:21 11:11 13:26 14:41 15:46 17:05 18:05 19:34 20:49 22:39", "", "05:36 07:17 08:16 13:49 16:22 17:10", "")
            } else if (three == "saturday") {
                pokazRozklad("00:24 06:15 09:40 12:10 14:55 17:10 19:40 20:50 22:54", "", "", "")
                only223()
            } else if (three == "sunday") {
                pokazRozklad("00:24mś 06:19 07:18 09:29 11:18 16:29 18:24 20:39", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:30 06:22 07:04 07:44 08:28 10:19 12:39 13:49G 14:19F 14:54 16:14 17:18 18:49 19:59 21:56 23:44", "", "05:53 06:34 12:09 14:39 15:44 21:47", "")
            } else if (three == "saturday") {
                pokazRozklad("05:33 08:47 11:17 14:07 16:24 18:52 19:59 22:05 23:46", "", "", "")
                only223()
            } else if (three == "sunday") {
                pokazRozklad("05:38 08:45 10:29 12:29 15:40 17:40 19:50", "", "", "")
                only223()

            }
        }
        only223and210()
    }
    if (one == "val16") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:28 05:21 05:47 06:17 07:13 07:58 08:33 09:23 11:13 13:28 14:43 15:48 17:07 18:07 19:36 20:51 22:41", "", "05:37 07:18 08:17 13:50 16:23 17:11", "")
            } else if (three == "saturday") {
                pokazRozklad("00:26 06:17 09:42 12:12 14:57 17:12 19:42 20:52 22:56", "", "", "")
                only223()
            } else if (three == "sunday") {
                pokazRozklad("00:26mś 06:21 07:20 09:31 11:20 16:31 18:26 20:41", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:28 06:20 07:02 07:42 08:26 10:17 12:37 13:47G 14:17F 14:52 16:12 17:16 18:47 19:57 21:54 23:42", "", "05:52 06:33 12:07 14:37 15:43 21:46", "")
            } else if (three == "saturday") {
                pokazRozklad("05:31 08:45 11:15 14:05 16:22 18:50 19:57 22:03 23:44", "", "", "")
                only223()
            } else if (three == "sunday") {
                pokazRozklad("05:36 08:43 10:28 12:28 15:38 17:38 19:48", "", "", "")
                only223()
            }
        }
        only223and210()
    }
    if (one == "val17") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:29 05:22 05:49 06:19 07:15 08:00 08:35 09:25 11:15 13:30 14:45 15:50 17:08 18:08 19:37 20:52 22:42", "", "05:38 07:19 08:18 13:51 16:24 17:12", "")
            } else if (three == "saturday") {
                pokazRozklad("00:27 06:18 09:43 12:13 14:58 17:13 19:43 20:53 22:57", "", "", "")
                only223()
            } else if (three == "sunday") {
                pokazRozklad("00:27mś 06:22 07:21 09:32 11:21 16:32 18:27 20:42", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:27 06:18 07:00 07:40 08:24 10:15 12:35 13:45G 14:15F 14:50 16:10 17:14 18:45 19:56 21:53 23:41", "", "05:51 06:32 12:06 14:36 15:42 21:45", "")
            } else if (three == "saturday") {
                pokazRozklad("05:30 08:43 11:13 14:03 16:20 18:48 19:56 22:02 23:43", "", "", "")
                only223()
            } else if (three == "sunday") {
                pokazRozklad("05:35 08:42 10:26 12:26 15:37 17:37 19:47", "", "", "")
                only223()
            }
        }
        only223and210()
    }
    if (one == "val18") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:30 05:24 05:51 06:21 07:17 08:02 08:37 09:27 11:17 13:32 14:47 15:52 17:10 18:10 19:39 20:54 22:44", "", "05:39 07:20 08:19 13:52 16:25 17:13", "")
            } else if (three == "saturday") {
                pokazRozklad("00:28 06:20 09:45 12:15 15:00 17:15 19:45 20:55 22:58", "", "", "")
                only223()
            } else if (three == "sunday") {
                pokazRozklad("00:28mś 06:23 07:22 09:33 11:22 16:33 18:28 20:43", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:25 06:16 06:58 07:38 08:22 10:13 12:33 13:43G 14:13F 14:48 16:08 17:12 18:43 19:54 21:51 23:39", "", "", "")
                only223()
            } else if (three == "saturday") {
                pokazRozklad("05:28 08:41 11:11 14:01 16:18 18:46 19:54 22:00 23:42", "", "", "")
                only223()
            } else if (three == "sunday") {
                pokazRozklad("05:34 08:40 15:35 17:35 19:45", "", "", "")
                only223()
            }
        }
        only223and210()
    }
    if (one == "val19") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:31 05:25 05:52 06:22 07:18 08:03 08:38 09:28 11:18 13:33 14:48 15:53 17:11 18:11 19:40 20:55 22:45", "", "", "")
                only223()
            } else if (three == "saturday") {
                pokazRozklad("00:29 06:21 09:46 12:16 15:01 17:16 19:46 20:56 22:59", "", "", "")
                only223()
            } else if (three == "sunday") {
                pokazRozklad("00:29mś 06:24 09:34 16:34 18:29 20:44", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:24 06:15 06:57 07:37 08:21 10:12 12:32 13:42G 14:12F 14:47 16:07 17:11 18:42 19:53 21:50 23:38", "", "", "")
                only223()
            } else if (three == "saturday") {
                pokazRozklad("05:27 08:40 11:10 14:00 16:17 18:45 19:53 21:59 23:41", "", "", "")
                only223()
            } else if (three == "sunday") {
                pokazRozklad("05:33 08:39 15:34 17:34 19:44", "", "", "")
                only223()
            }
        }
        only223and210()
    }
    if (one == "val20") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:32 05:27 05:54 06:24 07:20 08:05 08:40 09:30 11:20 13:35 14:50 15:55 17:13 18:13 19:42 20:57 22:47", "", "", "")
                only223()
            } else if (three == "saturday") {
                pokazRozklad("00:30 06:23 09:48 12:18 15:03 17:18 19:48 20:58 23:00", "", "", "")
                only223()
            } else if (three == "sunday") {
                pokazRozklad("00:30mś 06:26 09:36 16:36 18:31 20:46", "", "", "")
                only223()

            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:23 06:14 06:56 07:36 08:20 10:11 12:31 13:41G 14:11F 14:46 16:06 17:10 18:41 19:52 21:49 23:37", "", "05:49 06:30 12:03 14:33 15:39 21:43", "")
            } else if (three == "saturday") {
                pokazRozklad("05:25 08:38 11:08 13:58 16:15 18:43 19:51 21:57 23:39", "", "", "")
                only223()
            } else if (three == "sunday") {
                pokazRozklad("05:32 08:38 15:33 17:33 19:43", "", "", "")
                only223()
            }
        }
        only223and210()
    }
    if (one == "val21") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:34 05:29 05:56 06:26 07:22 08:07 08:42 09:32 11:22 13:37 14:52 15:57 17:15 18:15 19:44 20:59 22:49", "", "05:41 07:22 08:21 13:54 16:28 17:16", "")
            } else if (three == "saturday") {
                pokazRozklad("00:32 06:25 09:50 12:20 15:05 17:20 19:50 21:00 23:02", "", "", "")
                only223()
            } else if (three == "sunday") {
                pokazRozklad("00:32mś 06:28 07:26 09:38 11:26 16:38 18:33 20:48", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:22 06:13 06:55 07:35 08:19 10:10 12:30 13:40G 14:10F 14:45 16:05 17:09 18:40 19:51 21:48 23:36", "", "05:48 06:29 12:02 14:32 15:38 21:42", "")
            } else if (three == "saturday") {
                pokazRozklad("05:23 08:36 11:06 13:56 16:13 18:41 19:49 21:56 23:38", "", "", "")
                only223()
            } else if (three == "sunday") {
                pokazRozklad("05:31 08:37 10:23 12:23 15:32 17:32 19:42", "", "", "")
                only223()
            }
        }
        only223and210()
    }
    if (one == "val22") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:35 05:30 05:57 06:27 07:24 08:09 08:44 09:34 11:24 13:39 14:54 15:59 17:17 18:17 19:45 21:00 22:50", "", "05:42 07:23 08:22 13:55 16:29 17:17", "")
            } else if (three == "saturday") {
                pokazRozklad("00:33 06:27 09:52 12:22 15:07 17:22 19:51 21:01 23:03", "", "", "")
                only223and228()
            } else if (three == "sunday") {
                pokazRozklad("00:35mś 06:31 09:41 16:41 18:36 20:51", "", "", "")
                only223and228()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:21 06:11 06:53 07:33 08:17 10:08 12:28 13:38G 14:08F 14:43 16:03 17:07 18:38 19:49 21:47 23:35", "", "05:47 06:28 12:01 14:31 15:37 21:41", "")
            } else if (three == "saturday") {
                pokazRozklad("05:22 08:35 11:05 13:55 16:11 18:40 19:48 21:55 23:37", "", "", "")
                only223and228()
            } else if (three == "sunday") {
                pokazRozklad("05:30 08:36 10:22 12:22 15:31 17:31 19:41", "", "", "")
                only223and228()
            }
        }
        only223and210()
    }
    if (one == "val23") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:37 05:32 05:59 06:29 07:27 08:12 08:47 09:37 11:27 13:42 14:57 16:02 17:19 18:19 19:47 21:02 22:52", "", "05:44 07:25 08:24 13:58 16:31 17:19", "")
            } else if (three == "saturday") {
                pokazRozklad("00:35 06:29 09:54 12:24 15:09 17:24 19:53 21:03 23:05", "", "", "")
                only223and228()
            } else if (three == "sunday") {
                pokazRozklad("00:35mś 06:31 09:41 16:41 18:36 20:51", "", "", "")
                only223and228()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:20 06:09 06:51 07:31 08:15 10:06 12:26 13:36G 14:06F 14:41 16:01 17:05 18:36 19:48 21:46 23:34", "", "05:45 06:26 11:57 14:28 15:34 21:39", "")
            } else if (three == "saturday") {
                pokazRozklad("05:20 08:33 11:03 13:53 16:09 18:38 19:46 21:53 23:35", "", "", "")
                only223and228()
            } else if (three == "sunday") {
                pokazRozklad("05:29 08:35 10:21 12:21 15:30 17:30 19:40", "", "", "")
                only223and228()
            }
        }
        only223and210()
    }
    if (one == "val24") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:39 05:34 06:01 06:31 07:29 08:14 08:49 09:39 11:29 13:44 14:59 16:04 17:21 18:21 19:49 21:04 22:54", "06:21 07:21 09:16 11:26 14:01 16:21", "05:44 07:25 08:24 13:58 16:31 17:19", "05:51 07:06 08:22 12:57 15:16 16:57 21:56")
            } else if (three == "saturday") {
                pokazRozklad("00:37 06:31 09:56 12:26 15:11 17:26 19:55 21:05 23:07", "06:21 07:21 09:16 11:26 14:01 16:21", "", "05:51 08:01 13:21 16:38 20:07")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("00:37mś 06:33 09:43 16:43 18:38 20:53", "", "", "07:12 15:02 17:57 20:39")
                only223and228()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:18 06:07 06:49 07:29 08:13 10:04 12:24 13:34G 14:04F 14:39 15:59 17:03 18:34 19:46 21:44 23:32", "08:23 10:33 12:13 15:28 16:53", "05:45 06:26 11:57 14:28 15:34 21:39", "05:05 06:20 07:36 12:11 14:27 16:11 21:10")
            } else if (three == "saturday") {
                pokazRozklad("05:19 08:31 11:01 13:51 16:07 18:36 19:44 21:52 23:34", "08:23 10:33 12:13 15:28 16:53", "", "05:05 07:15 12:35 15:51 19:20")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("05:27 08:33 15:28 17:28 19:38", "", "", "06:25 14:15 17:10 19:20")
                only223and228()
            }
        }
    }
    if (one == "val25") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:40 05:35 06:03 06:33 07:31 08:16 08:51 09:41 11:31 13:46 15:01 16:06 17:22 18:22 19:50 21:05 22:55", "06:21 07:21 09:16 11:26 14:01 16:21", "05:46 07:26 08:25 13:59 16:32 17:20", "05:52 07:08 08:24 12:59 15:18 16:59 21:58")
            } else if (three == "saturday") {
                pokazRozklad("00:38 06:32 09:57 12:27 15:12 17:27 19:56 21:06 23:08", "06:21 07:21 09:16 11:26 14:01 16:21", "", "05:53 08:03 13:23 16:40 20:09")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("00:38mś 06:34 09:44 16:44 18:39 20:54", "", "", "07:14 15:04 17:59 20:41")
                only223and228()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:17 06:05 06:47 07:27 08:11 10:02 12:22 13:32G 14:02F 14:37 15:57 17:01 18:32 19:44 21:43 23:31", "08:22 10:32 12:12 15:27 16:52", "05:44 06:24 11:56 14:26 15:32 21:38", "05:03 06:18 07:34 12:09 14:25 16:09 21:08")
            } else if (three == "saturday") {
                pokazRozklad("05:17 08:29 10:59 13:49 16:05 18:34 19:42 21:50 23:32", "08:22 10:32 12:12 15:27 16:52", "05:03 07:13 12:33 15:49 19:18")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("05:26 08:32 15:27 17:27 19:37", "", "", "06:23 14:13 17:08 19:18")
                only223and228()
            }
        }
    }
    if (one == "val26") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:41 05:36 06:04 06:34 07:33 08:18 08:53 09:43 11:33 13:48 15:03 16:08 17:24 18:24 19:51 21:06 22:56", "06:22 07:22 09:17 11:27 14:02 16:22", "05:48 07:28 08:27 14:00 16:33 17:22", "05:53 07:09 08:25 13:00 15:19 17:00 21:59")
            } else if (three == "saturday") {
                pokazRozklad("00:39 06:34 09:59 12:29 15:14 17:29 19:57 21:07 23:09", "06:22 07:22 09:17 11:27 14:02 16:22", "", "05:54 08:04 13:24 16:41 20:10")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("00:39mś 06:35 09:45 16:45 18:40 20:55", "", "", "07:15 15:05 18:00 20:42")
                only223and228()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:15 06:03 06:45 07:25 08:09 10:00 12:20 13:30G 14:00F 14:35 15:55 16:59 18:30 19:42 21:41 23:29", "08:22 10:32 12:12 15:27 16:52", "05:43 06:23 11:55 14:25 15:30 21:37", "05:02 06:17 07:33 12:08 14:24 16:08 21:07")
            } else if (three == "saturday") {
                pokazRozklad("05:16 08:28 10:58 13:48 16:04 18:33 19:41 21:49 23:31", "08:22 10:32 12:12 15:27 16:52", "", "05:02 07:12 12:32 15:48 19:17")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("05:24 08:30 15:25 17:25 19:35", "", "", "06:22 14:12 17:07 19:17")
                only223and228()
            }
        }
    }
    if (one == "val27") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:42 05:37 06:06 06:36 07:35 08:20 08:55 09:45 11:35 13:50 15:05 16:10 17:26 18:26 19:52 21:07 22:57", "06:23 07:23 09:18 11:28 14:03 16:23", "05:50 07:30 08:29 14:02 16:34 17:23", "05:55 07:11 08:27 13:02 15:20 17:02 22:00")
            } else if (three == "saturday") {
                pokazRozklad("00:40 06:36 10:01 12:31 15:16 17:31 19:59 21:09 23:10", "06:23 07:23 09:18 11:28 14:03 16:23", "", "05:56 08:06 13:26 16:42 20:11")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("00:40mś 06:36 09:46 16:46 18:41 20:56", "", "", "07:16 15:06 18:01 20:43")
                only223and228()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:14 06:02 06:44 07:24 08:08 09:59 12:19 13:29G 13:59F 14:34 15:53 16:58 18:29 19:41 21:40 23:28", "08:21 10:31 12:11 15:26 16:51", "05:42 06:21 11:53 14:23 15:28 21:36", "05:01 06:16 07:32 12:07 14:23 16:07 21:06")
            } else if (three == "saturday") {
                pokazRozklad("05:15 08:27 10:57 13:47 16:03 18:32 19:40 21:48 23:30", "08:21 10:31 12:11 15:26 16:51", "", "05:01 07:11 12:31 15:47 19:16")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("05:23 08:29 15:24 17:24 19:34", "", "", "06:21 14:11 17:06 19:16")
                only223and228()
            }
        }
    }
    if (one == "val28") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:43 05:39 06:08 06:38 07:38 08:23 08:58 09:48 11:38 13:53 15:08 16:13 17:28 18:28 19:54 21:09 22:59", "06:24 07:24 09:19 11:29 14:04 16:24", "05:52 07:32 08:31 14:04 16:35 17:25", "05:57 07:13 08:29 13:04 15:22 17:04 22:01")
            } else if (three == "saturday") {
                pokazRozklad("00:42 06:38 10:03 12:33 15:18 17:33 20:01 21:11 23:12", "06:24 07:24 09:19 11:29 14:04 16:24", "", "05:58 08:07 13:28 16:43 20:12")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("00:42mś 06:38 09:48 16:48 18:43 20:58", "", "", "07:17 15:07 18:03 20:44")
                only223and228()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:13 06:00 06:42 07:22 08:07 09:58 12:18 13:28G 13:58F 14:33 15:51 16:57 18:28 19:40 21:39 23:27", "08:19 10:29 12:09 15:24 16:49", "05:40 06:20 11:51 14:21 15:26 21:35", "05:00 06:15 07:30 12:05 14:21 16:05 21:05")
            } else if (three == "saturday") {
                pokazRozklad("05:13 08:25 10:55 13:45 16:01 18:30 19:38 21:46 23:28", "08:19 10:29 12:09 15:24 16:49", "", "05:00 07:10 12:30 15:45 19:15")
                hide210()
            } else if (three == "sunday") {
                pokazRozklad("05:22 08:28 15:23 17:23 19:33", "", "", "06:20 14:10 17:05 19:15")
                only223and228()
            }
        }
    }
    if (one == "val29") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:44 05:40 06:10 06:40 07:40 08:25 09:00 09:50 11:40 13:55 15:10 16:15 17:30 18:30 19:56 21:11 23:01", "06:26 07:26 09:21 11:31 14:06 16:26", "", "")
            } else if (three == "saturday") {
                pokazRozklad("00:43 06:40 10:05 12:35 15:20 17:35 20:02 21:12 23:13", "06:26 07:26 09:21 11:31 14:06 16:26", "", "")
            } else if (three == "sunday") {
                pokazRozklad("00:43mś 06:39 09:49 16:49 18:44 20:59", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:11 05:58 06:40 07:20 08:05 09:56 12:16 13:26G 13:56F 14:31 15:48 16:55 18:26 19:38 21:37 23:25", "08:18 10:28 12:08 15:23 16:48", "", "")
            } else if (three == "saturday") {
                pokazRozklad("05:12 08:23 10:53 13:43 15:59 18:28 19:36 21:45 23:27", "08:18 10:28 12:08 15:23 16:48", "", "")
            } else if (three == "sunday") {
                pokazRozklad("05:21 08:26 15:21 17:21 19:31", "", "", "")
                only223()
            }
        }
        remove210and228()
    }
    if (one == "val30") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:45 05:41 06:11 06:41 07:41 08:26 09:01 09:51 11:41 13:56 15:11 15:11 16:16 17:31 18:31 19:57 21:12 23:02", "06:27 07:27 09:22 11:32 14:07 16:27", "", "")
            } else if (three == "saturday") {
                pokazRozklad("00:44 06:41 10:06 12:36 15:21 17:36 20:03 21:13 23:14", "06:27 07:27 09:22 11:32 14:07 16:27", "", "")
            } else if (three == "sunday") {
                pokazRozklad("00:44mś 06:40 09:50 16:50 18:45 21:00", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:10 05:56 06:38 07:18 08:03 09:54 12:14 13:24G 13:54F 14:29 15:46 16:53 18:24 19:36 21:36 23:24", "08:17 10:27 12:07 15:22 16:47", "", "")
            } else if (three == "saturday") {
                pokazRozklad("05:11 08:21 10:51 13:41 15:57 18:26 19:35 21:44 23:26", "08:17 10:27 12:07 15:22 16:47", "", "")
            } else if (three == "sunday") {
                pokazRozklad("05:20 08:25 15:20 17:20 19:30", "", "", "")
                only223()
            }
        }
        remove210and228()
    }
    if (one == "val31") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:46 05:43 06:13 06:43 07:43 08:28 09:03 09:53 11:43 13:58 15:13 15:13 16:18 17:33 18:33 19:58 21:13 23:03", "06:28 07:28 09:23 11:33 14:08 16:28", "", "")
            } else if (three == "saturday") {
                pokazRozklad("00:45 06:43 10:08 12:38 15:23 17:38 20:05 21:15 23:16", "06:28 07:28 09:23 11:33 14:08 16:28", "", "")
            } else if (three == "sunday") {
                pokazRozklad("00:45mś 06:42 09:52 16:52 18:47 21:02", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:09 05:55 06:36 07:16 08:01 09:52 12:12 13:22G 13:52F 14:27 15:43 16:51 18:22 19:35 21:35 23:23", "08:16 10:26 12:06 15:21 16:46", "", "")
            } else if (three == "saturday") {
                pokazRozklad("05:10 08:19 10:49 13:39 15:55 18:24 19:33 21:42 23:25", "08:16 10:26 12:06 15:21 16:46", "", "")
            } else if (three == "sunday") {
                pokazRozklad("05:19 08:24 15:19 17:19 19:29", "", "", "")
                only223()
            }
        }
        remove210and228()
    }
    if (one == "val32") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:47 05:45 06:15 06:45 07:45 08:30 09:05 09:55 11:45 14:00 15:15 15:15 16:20 17:35 18:35 19:59 21:14 23:04", "06:29 07:29 09:24 11:34 14:09 16:29", "", "")
            } else if (three == "saturday") {
                pokazRozklad("00:46 06:45 10:10 12:40 15:25 17:40 20:06 21:16 23:17", "06:29 07:29 09:24 11:34 14:09 16:29", "", "")
            } else if (three == "sunday") {
                pokazRozklad("00:46mś 06:43 09:53 16:53 18:48 21:03", "", "", "")
                only223()
            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:07 05:53 06:34 07:14 07:59 09:50 12:10 13:20G 13:50F 14:25 15:40 16:49 18:20 19:33 21:33 23:21", "08:15 10:25 12:05 15:20 16:45", "", "")
            } else if (three == "saturday") {
                pokazRozklad("05:09 08:17 10:47 13:37 15:53 18:22 19:31 21:41 23:24", "08:15 10:25 12:05 15:20 16:45", "", "")
            } else if (three == "sunday") {
                pokazRozklad("05:17 08:22 15:17 17:17 19:27", "", "", "")
                only223()
            }
        }
        remove210and228()
    }
    if (one == "val33") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:49 05:47 06:18 06:48 07:47 08:32 09:07 09:57 11:47 14:02 15:17 15:17 16:22 17:37 18:37 20:01 21:16 23:06", "", "", "")

            } else if (three == "saturday") {
                pokazRozklad("00:48 06:47 10:12 12:42 15:27 17:42 20:08 21:18 23:19", "", "", "")

            } else if (three == "sunday") {
                pokazRozklad("00:48mś 06:45 09:55 16:55 18:50 21:05", "", "", "")

            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:06 05:52 06:33 07:13 07:57 09:48 12:08 13:18G 13:48F 14:23 15:38 16:47 18:18 19:31 21:32 23:20", "", "", "")

            } else if (three == "saturday") {
                pokazRozklad("05:07 08:14 10:44 13:34 15:50 18:19 19:29 21:39 23:22", "", "", "")

            } else if (three == "sunday") {
                pokazRozklad("05:16 08:21 15:16 17:16 19:26", "", "", "")

            }
        }

        only223()
    }
    if (one == "val34") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:50 08:34 09:09 09:59 11:49 14:04 15:19 15:19 16:24 17:39 18:39 20:02 23:07", "", "", "")

            } else if (three == "saturday") {
                pokazRozklad("00:49 06:49 10:14 12:44 15:29 17:44 20:10 21:20", "", "", "")

            } else if (three == "sunday") {
                pokazRozklad("00:49mś 06:47 09:57 16:57 18:52 21:07", "", "", "")

            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:04 05:50 06:30 07:10 07:55 09:45 12:05 13:15G 13:45F 14:20 15:35 16:45 18:15 19:29 21:30 23:18", "", "", "")

            } else if (three == "saturday") {
                pokazRozklad("05:06 08:12 10:42 13:32 15:47 18:17 19:27 21:37", "", "", "")

            } else if (three == "sunday") {
                pokazRozklad("05:14 08:19 15:14 17:14 19:24", "", "", "")

            }
        }
        only223()
    }
    if (one == "val35") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:51 08:36 09:11 10:01 11:51 14:06 15:21 16:26 17:41 18:41 20:03 23:08", "", "", "")

            } else if (three == "saturday") {
                pokazRozklad("00:50 06:51 10:16 12:46 15:31 17:46 20:12 21:22", "", "", "")

            } else if (three == "sunday") {
                pokazRozklad("00:50mś 06:48 09:58 16:58 18:53 21:08", "", "", "")

            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:02 09:42 12:02 13:12G 13:42F 14:17 15:32 16:42 18:12 19:27 23:16", "", "", "")

            } else if (three == "saturday") {
                pokazRozklad("05:05 08:10 10:40 13:30 15:45 18:15 19:25 21:35", "", "", "")

            } else if (three == "sunday") {
                pokazRozklad("05:12 08:17 15:12 17:12 19:22", "", "", "")

            }
        }
        only223()
    }
    if (one == "val36") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("00:52 08:38 09:13 10:03 11:53 14:08 15:23 16:28 17:43 18:43 20:04 23:09", "", "", "")

            } else if (three == "saturday") {
                pokazRozklad("00:51 06:53 10:18 12:48 15:33 17:48 20:13 21:23", "", "", "")

            } else if (three == "sunday") {
                pokazRozklad("00:51mś 06:49 09:59 16:59 18:54 21:09", "", "", "")

            }

        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("05:00 09:40 12:00 13:10G 13:40F 14:15 15:30 16:40 18:10 19:25 23:15", "", "", "")

            } else if (three == "saturday") {
                pokazRozklad("05:51 09:06 11:36 14:26 16:44 19:11 20:19 22:24 00:04", "", "", "")

            } else if (three == "sunday") {
                pokazRozklad("05:10 08:15 15:10 17:10 19:20", "", "", "")

            }
        }
        only223()
    }


    // ONLY 210 
    if (one == "val37") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("", "", "05:58 07:38 08:37 14:09 16:40 17:31", "06:03 07:18 08:34 13:10 15:28 17:10 22:06")
                only210()
            } else if (three == "saturday") {
                pokazRozklad("", "", "", "06:04 08:13 13:33 16:48 20:17")
                only228()

            } else if (three == "sunday") {
                pokazRozklad("07:43 11:43", "", "", "07:22 15:12 18:08 20:49")
                only223and228()
            }
        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("", "", "05:35 06:15 11:45 14:15 15:20 21:30", "04:55 06:10 07:25 12:00 14:15 16:00 21:00")
                only210()
            } else if (three == "saturday") {
                pokazRozklad("", "", "", "04:55 07:05 12:25 15:40 19:10")
                only228()
            } else if (three == "sunday") {
                pokazRozklad("10:05 12:05", "", "", "06:15 14:05 17:00 19:10")
                only223and228()
            }
        }
    }

    //KUDLIK i 228

    if (one == "val38") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("", "06:05 07:05 09:00 11:10 13:45 16:05", "", "05:41 06:56 08:12 12:47 15:06 16:47 21:46")
                onlykudlikand228()
            } else if (three == "saturday") {
                pokazRozklad("", "06:05 07:05 09:00 11:10 13:45 16:05", "", "05:41 07:51 13:11 16:28 19:57")
                onlykudlikand228()
            } else if (three == "sunday") {
                pokazRozklad("", "", "", "07:02 14:52 17:47 20:29")
                only228()
            }
        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("", "08:39 10:49 12:29 15:44 17:09", "", "05:15 06:30 07:46 12:21 14:37 16:21 21:20")
                onlykudlikand228()
            } else if (three == "saturday") {
                pokazRozklad("", "08:39 10:49 12:29 15:44 17:09", "", "05:15 07:25 12:45 16:01 19:30")
                onlykudlikand228()
            } else if (three == "sunday") {
                pokazRozklad("", "", "", "06:35 14:25 17:20 19:30")
                only228()
            }
        }
    }

    if (one == "val39") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("", "06:07 07:07 09:02 11:12 13:47 16:07", "", "05:42 06:57 08:13 12:48 15:07 16:48 21:47")
                onlykudlikand228()
            } else if (three == "saturday") {
                pokazRozklad("", "06:07 07:07 09:02 11:12 13:47 16:07", "", "05:42 07:52 13:12 16:29 19:58")
                onlykudlikand228()
            } else if (three == "sunday") {
                pokazRozklad("", "", "", "07:03 14:53 17:48 20:30")
                only228()
            }
        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("", "08:37 10:47 12:27 15:42 17:07", "", "05:14 06:29 07:45 12:20 14:36 16:20 21:19")
                onlykudlikand228()
            } else if (three == "saturday") {
                pokazRozklad("", "08:37 10:47 12:27 15:42 17:07", "", "05:14 07:24 12:44 16:00 19:29")
                onlykudlikand228()
            } else if (three == "sunday") {
                pokazRozklad("", "", "", "06:34 14:24 17:19 19:29")
                only228()
            }
        }
    }

    if (one == "val40") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("", "06:09 07:09 09:04 11:14 13:49 16:09", "", "05:43 06:58 08:14 12:49 15:08 16:49 21:48")
                onlykudlikand228()
            } else if (three == "saturday") {
                pokazRozklad("", "06:09 07:09 09:04 11:14 13:49 16:09", "", "05:43 07:53 13:13 16:30 19:59")
                onlykudlikand228()
            } else if (three == "sunday") {
                pokazRozklad("", "", "", "07:04 14:54 17:49 20:31")
                only228()
            }
        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("", "08:35 10:45 12:25 15:40 17:05", "", "05:13 06:28 07:44 12:19 14:35 16:19 21:18")
                onlykudlikand228()
            } else if (three == "saturday") {
                pokazRozklad("", "08:35 10:45 12:25 15:40 17:05", "", "05:13 07:23 12:43 15:59 19:28")
                onlykudlikand228()
            } else if (three == "sunday") {
                pokazRozklad("", "", "", "06:33 14:23 17:18 19:28")
                only228()
            }
        }
    }

    if (one == "val41") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("", "06:11 07:11 09:06 11:16 13:51 16:11", "", "05:44 06:59 08:15 12:50 15:09 16:50 21:49")
                onlykudlikand228()
            } else if (three == "saturday") {
                pokazRozklad("", "06:11 07:11 09:06 11:16 13:51 16:11", "", "05:44 07:54 13:14 16:31 20:00")
                onlykudlikand228()
            } else if (three == "sunday") {
                pokazRozklad("", "", "", "07:05 14:55 17:50 20:32")
                only228()
            }
        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("", "08:33 10:43 12:23 15:38 17:03", "", "05:12 06:27 07:43 12:18 14:34 16:18 21:17")
                onlykudlikand228()
            } else if (three == "saturday") {
                pokazRozklad("", "08:33 10:43 12:23 15:38 17:03", "", "05:12 07:22 12:42 15:58 19:27")
                onlykudlikand228()
            } else if (three == "sunday") {
                pokazRozklad("", "", "", "06:32 14:22 17:17 19:27")
                only228()
            }
        }
    }

    if (one == "val42") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("", "06:13 07:13 09:08 11:18 13:53 16:13", "", "05:45 07:00 08:16 12:51 15:10 16:51 21:50")
                onlykudlikand228()
            } else if (three == "saturday") {
                pokazRozklad("", "06:13 07:13 09:08 11:18 13:53 16:13", "", "05:45 07:55 13:15 16:32 20:01")
                onlykudlikand228()
            } else if (three == "sunday") {
                pokazRozklad("", "", "", "07:06 14:56 17:51 20:33")
                only228()
            }
        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("", "08:31 10:41 12:21 15:36 17:01", "", "05:11 06:26 07:42 12:17 14:33 16:17 21:16")
                onlykudlikand228()
            } else if (three == "saturday") {
                pokazRozklad("", "08:31 10:41 12:21 15:36 17:01", "", "05:11 07:21 12:41 15:57 19:26")
                onlykudlikand228()
            } else if (three == "sunday") {
                pokazRozklad("", "", "", "06:31 14:21 17:16 19:26")
                only228()
            }
        }
    }

    if (one == "val43") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("", "06:15 07:15 09:10 11:20 13:55 16:15", "", "05:46 07:01 08:17 12:52 15:11 16:52 21:51")
                onlykudlikand228()
            } else if (three == "saturday") {
                pokazRozklad("", "06:15 07:15 09:10 11:20 13:55 16:15", "", "05:46 07:56 13:16 16:33 20:02")
                onlykudlikand228()
            } else if (three == "sunday") {
                pokazRozklad("", "", "", "07:07 14:57 17:52 20:34")
                only228()
            }
        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("", "08:29 10:39 12:19 15:34 16:59", "", "05:10 06:25 07:41 12:16 14:32 16:16 21:15")
                onlykudlikand228()
            } else if (three == "saturday") {
                pokazRozklad("", "08:29 10:39 12:19 15:34 16:59", "", "05:10 07:20 12:40 15:56 19:25")
                onlykudlikand228()
            } else if (three == "sunday") {
                pokazRozklad("", "", "", "06:30 14:20 17:15 19:25")
                only228()
            }
        }
    }

    if (one == "val44") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("", "06:17 07:17 09:12 11:22 13:57 16:17", "", "05:47 07:02 08:18 12:53 15:12 16:53 21:52")
                onlykudlikand228()
            } else if (three == "saturday") {
                pokazRozklad("", "06:17 07:17 09:12 11:22 13:57 16:17", "", "05:47 07:57 13:17 16:34 20:03")
                onlykudlikand228()
            } else if (three == "sunday") {
                pokazRozklad("", "", "", "07:08 14:58 17:53 20:35")
                only228()
            }
        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("", "08:27 10:37 12:17 15:32 16:57", "", "05:09 06:24 07:40 12:15 14:31 16:15 21:14")
                onlykudlikand228()
            } else if (three == "saturday") {
                pokazRozklad("", "08:27 10:37 12:17 15:32 16:57", "", "05:09 07:19 12:39 15:55 19:24")
                onlykudlikand228()
            } else if (three == "sunday") {
                pokazRozklad("", "", "", "06:29 14:19 17:14 19:24")
                only228()
            }
        }
    }

    if (one == "val45") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("", "06:19 07:19 09:14 11:24 13:59 16:19", "", "05:48 07:03 08:19 12:54 15:13 16:54 21:53")
                onlykudlikand228()
            } else if (three == "saturday") {
                pokazRozklad("", "06:19 07:19 09:14 11:24 13:59 16:19", "", "05:48 07:58 13:18 16:35 20:04")
                onlykudlikand228()
            } else if (three == "sunday") {
                pokazRozklad("", "", "", "07:09 14:59 17:54 20:36")
                only228()
            }
        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("", "08:25 10:35 12:15 15:30 16:55", "", "05:08 06:23 07:39 12:14 14:30 16:14 21:13")
                onlykudlikand228()
            } else if (three == "saturday") {
                pokazRozklad("", "08:25 10:35 12:15 15:30 16:55", "", "05:08 07:18 12:38 15:54 19:23")
                onlykudlikand228()
            } else if (three == "sunday") {
                pokazRozklad("", "", "", "06:28 14:18 17:13 19:23")
                only228()
            }
        }
    }

    if (one == "val46") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("", "06:20 07:20 09:15 11:25 14:00 16:20", "", "05:50 07:05 08:21 12:56 15:15 16:56 21:55")
                onlykudlikand228()
            } else if (three == "saturday") {
                pokazRozklad("", "06:20 07:20 09:15 11:25 14:00 16:20", "", "05:50 08:00 13:20 16:37 20:06")
                onlykudlikand228()
            } else if (three == "sunday") {
                pokazRozklad("", "", "", "07:11 15:01 17:56 20:38")
                only228()
            }
        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("", "08:24 10:34 12:14 15:29 16:54", "", "05:06 06:21 07:37 12:12 14:28 16:12 21:11")
                onlykudlikand228()
            } else if (three == "saturday") {
                pokazRozklad("", "08:24 10:34 12:14 15:29 16:54", "", "05:06 07:16 12:36 15:52 19:21")
                onlykudlikand228()
            } else if (three == "sunday") {
                pokazRozklad("", "", "", "06:26 14:16 17:11 19:21")
                only228()
            }
        }
    }

    if (one == "val47") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("", "06:32 07:32 09:27 11:37 14:12 16:32", "", "")
                onlykudlik()
            } else if (three == "saturday") {
                pokazRozklad("", "06:32 07:32 09:27 11:37 14:12 16:32", "", "")
                onlykudlik()
            } else if (three == "sunday") {
                hideRozklad()
            }
        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("", "08:12 10:22 12:02 15:17 16:42", "", "")
                onlykudlik()
            } else if (three == "saturday") {
                pokazRozklad("", "08:12 10:22 12:02 15:17 16:42", "", "")
                onlykudlik()
            } else if (three == "sunday") {
                hideRozklad()
            }
        }
    }

    if (one == "val48") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("", "06:35 07:35 09:30 11:40 14:15 16:35", "", "")
                onlykudlik()
            } else if (three == "saturday") {
                pokazRozklad("", "06:35 07:35 09:30 11:40 14:15 16:35", "", "")
                onlykudlik()
            } else if (three == "sunday") {
                hideRozklad()
            }
        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("", "08:09 10:19 11:59 15:14 16:39", "", "")
                onlykudlik()
            } else if (three == "saturday") {
                pokazRozklad("", "08:09 10:19 11:59 15:14 16:39", "", "")
                onlykudlik()
            } else if (three == "sunday") {
                hideRozklad()
            }
        }
    }

    if (one == "val49") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("", "06:38 07:38 09:33 11:43 14:18 16:38", "", "")
                onlykudlik()
            } else if (three == "saturday") {
                pokazRozklad("", "06:38 07:38 09:33 11:43 14:18 16:38", "", "")
                onlykudlik()
            } else if (three == "sunday") {
                hideRozklad()
            }
        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("", "08:07 10:17 11:57 15:12 16:37", "", "")
                onlykudlik()
            } else if (three == "saturday") {
                pokazRozklad("", "08:07 10:17 11:57 15:12 16:37", "", "")
                onlykudlik()
            } else if (three == "sunday") {
                hideRozklad()
            }
        }
    }

    if (one == "val50") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("", "06:40 07:40 09:35 11:45 14:20 16:40", "", "")
                onlykudlik()
            } else if (three == "saturday") {
                pokazRozklad("", "06:40 07:40 09:35 11:45 14:20 16:40", "", "")
                onlykudlik()
            } else if (three == "sunday") {
                hideRozklad()
            }
        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("", "08:05 10:15 11:55 15:10 16:35", "", "")
                onlykudlik()
            } else if (three == "saturday") {
                pokazRozklad("", "08:05 10:15 11:55 15:10 16:35", "", "")
                onlykudlik()
            } else if (three == "sunday") {
                hideRozklad()
            }
        }
    }

    if (one == "val51") {
        if (two == "rze") {
            if (three == "week") {
                pokazRozklad("", "06:45 07:45 09:40 11:50 14:25 16:45", "", "")
                onlykudlik()
            } else if (three == "saturday") {
                pokazRozklad("", "06:45 07:45 09:40 11:50 14:25 16:45", "", "")
                onlykudlik()
            } else if (three == "sunday") {
                hideRozklad()
            }
        }
        if (two == "nie") {
            if (three == "week") {
                pokazRozklad("", "08:00 10:10 11:50 15:05 16:30", "", "")
                onlykudlik()
            } else if (three == "saturday") {
                pokazRozklad("", "08:00 10:10 11:50 15:05 16:30", "", "")
                onlykudlik()
            } else if (three == "sunday") {
                hideRozklad()
            }
        }
    }
    // console.log(bus210r.textContent.split(" | "))
    // const table223 = bus223r.textContent.split(" | ")
    // console.log(bus228r.textContent.split(" | "))
    // console.log(timetable23p.textContent.split(" | "))

    // // for(i=0; i=)
    // const textTime = `${lz(now.getHours())}:${lz(now.getMinutes())}`;
    // for (let i = 0; i < table223.length; i++) {
    //     console.log(table223[i])



    // function func() {
    //     console.log(bus210r.textContent.split(" | "))
    //     const table223 = bus223r.textContent.split(" | ")
    //     console.log(bus228r.textContent.split(" | "))
    //     console.log(timetable23p.textContent.split(" | "))

    //     // for(i=0; i=)

    //     for (let i = 0; i < table223.length; i++) {
    //         busHour = table223[i]
    //         console.log(busHour)
    //         // console.log(textTime)
    //         // table223[i].style.bold = "red";
    //         table223[i] = '<span style="color:red">' + table223[i] + '</span>'
    //         console.log(table223[i])

    // // 
    //     }
}


// console.log(words[3]);
// const words = h2.split(' ')


// //legend

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


// DATA 


const elDate = document.querySelector("#elDate");
const elTime = document.querySelector("#elTime");


function lz(i) {
    return `${i}`.padStart(2, "0");
}

function showTextTime() {
    const now = new Date();
    const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

    const textDate = `${lz(now.getDate())} . ${lz((now.getMonth()+1))} . ${now.getFullYear()} (${days[now.getDay()]})`;
    const textTime = `${lz(now.getHours())} : ${lz(now.getMinutes())}`;

    elDate.innerHTML = textDate;
    elTime.innerHTML = textTime;

    window.requestAnimationFrame(showTextTime);
}

window.requestAnimationFrame(showTextTime);

const now = new Date();
const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
const today = days[now.getDay()]

if (today == "Poniedziałek" || "Wtorek" || "Środa" || "Czwartek" || "Piątek") {
    document.getElementById('week').setAttribute('selected', 'selected')
}
if (today == "Sobota") {
    document.getElementById('saturday').setAttribute('selected', 'selected')
}
if (today == "Niedziela") {
    document.getElementById('sunday').setAttribute('selected', 'selected')
}


//OPTIONS REVERSE

const przystanek = document.querySelector("#przystanek");
const options = Array.from(przystanek.querySelectorAll("option"));



document.querySelector("#where1").onclick = () => {
    if (options[0].value === "val0") {
        options.reverse();
        options.forEach((o) => przystanek.appendChild(o));
    }
}

document.querySelector("#where2").onclick = () => {
    if (options[0].value === "val51") {
        options.reverse();
        options.forEach((o) => przystanek.appendChild(o));
    }
}
let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = 'block';

    addBtn.addEventListener('click', () => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });
});